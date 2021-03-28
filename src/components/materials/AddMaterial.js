import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addContact} from '../../redux/actions/materialAction'
import shortid from 'shortid';

const AddMaterial = () => {
    const dispatch = useDispatch();
    const[name,setName] = useState("");
    const[phone,setPhone] = useState("");
    const[email,setEmail] = useState("");

    const createContact = e =>{
        e.preventDefault();
        const new_contact = {
            id:shortid.generate(),
            name:name,
            phone:phone,
            email:email,
        }
        console.log(new_contact);
        dispatch(addContact(new_contact));
    }
    
    return (
        <div className='card border-0 shadow'>
            <div className = "card-header">Add Material</div>
            <div className = "card-body">
                <form onSubmit={(e) => createContact(e)}>
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Enter Your name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>    
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Enter Your mobile'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>    
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Enter Your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>   

                    <button className='btn btn-primary' type='submit'> Create Material</button> 
                </form>
            </div>
        </div>
    )
}

export default AddMaterial
