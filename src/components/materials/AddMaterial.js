import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/actions/materialAction'
import shortid from 'shortid';

const AddMaterial = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [item, setItem] = useState("");
    const [volume, setVolume] = useState("");
    const [cost, setCost] = useState("");
    const [color, setColor] = useState("#1bcbf2");

    const createContact = e => {
        e.preventDefault();
        const new_contact = {
            id: shortid.generate(),
            item: item,
            volume: volume,
            cost: cost,
            color : color
        }
        console.log(new_contact);
        dispatch(addContact(new_contact));
    }

    return (
        <div className='card card-color text-white border-0 shadow'>
            <div className="card-body">
                <form onSubmit={(e) => createContact(e)}>
                    <div class="row">
                        <div class="col">
                            <div className='form-group'>
                                <h6>Name</h6>
                                <input
                                    id="inputColor"
                                    type='text'
                                    className='form-control'
                                    placeholder='New Material'
                                    value={item}
                                    onChange={(e) => setItem(e.target.value)}
                                />
                            </div>
                        </div>
                        <div class="col">
                            <div>
                                <h6>Color</h6>
                                <div>
                                <row>
                                <input 
                                    className="color-picker" 
                                    type='color' 
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                                </row>
                               </div>
                               </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div className='form-group'>
                                <h6>Volume(m<sup>3</sup>)</h6>
                                <div>
                                    <select className="browser-default custom-select">
                                        <option>0</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <h6>Cost(USD per m<sup>3</sup>)</h6>
                                <div >
                                    <select className="browser-default custom-select">
                                        <option>0.00</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h6>Delivery Date</h6>
                            <div>
                                <input 
                                    id="inputColor"
                                    type='date'
                                    className='form-control browser-default'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div class="col"></div>
                    </div>
                    <br />
                    <div class='row'>
                        <div class='col'>
                            <button id="btn" className='btn btn-primary' type='submit'> Create Material</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddMaterial
