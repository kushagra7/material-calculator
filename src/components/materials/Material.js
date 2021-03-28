import React from 'react'
import '../../styles/App.scss';
import { Link } from 'react-router-dom';
import {deleteContact} from '../../redux/actions/materialAction';
import {useDispatch} from 'react-redux';

const Material = ({material}) => {
    const dispatch = useDispatch();
    const { name, phone, email, id } = material;
    return (
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>
                </div>
            </td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions"> 
                <Link to={`/contacts/edit/${id}`}>
                    <span className="material-icons mr-2" >edit</span>
                </Link>
                    {/* <span 
                    className="material-icons text-danger" 
                    onClick={()=>dispatch(deleteContact(id))}>  remove_circle</span> */}
            </td>
        </tr>
    )
}

export default Material
