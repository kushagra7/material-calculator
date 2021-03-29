import React,{useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getContact, updateContact } from '../../redux/actions/materialAction'
import { useParams, useHistory } from 'react-router-dom';

const EditMaterial = () => {
    const dispatch = useDispatch();
    let history = useHistory();  
    //in reducer we have contact for full reducer
    const contact = useSelector(state => state.contact.contact);
    const[name,setName] = useState("");
    const[phone,setPhone] = useState("");
    const[email,setEmail] = useState("");

    let {id} = useParams();
    
    useEffect(()=>{
        if(contact != null) {
            setName(contact.name)
            setPhone(contact.phone)
            setEmail(contact.email)
        }
        dispatch(getContact(id))
    },[contact]);

    const onUpdateContact = (e) =>{
        e.preventDefault();

        const update_contact = Object.assign(contact, {
            name : name,
            phone :phone,
            email: email,
        })
         
        dispatch(updateContact(update_contact));
        history.push('/')
    };

    return (
        <div className='card card-color border-0 shadow'>
            <div className = "card-header">Edit Material</div>
            <div className = "card-body">
            <form onSubmit={(e) => onUpdateContact(e)}>
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

                    <button className='btn btn-warning' type='submit'> Edit Contact</button> 
                </form>
            </div>
        </div>
    )
}

export default EditMaterial
