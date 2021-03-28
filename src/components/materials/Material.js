import React from 'react'
import '../../styles/App.scss';
import { Link } from 'react-router-dom';
import { deleteContact } from '../../redux/actions/materialAction';
import { useDispatch } from 'react-redux';

const Material = ({ material }) => {
    const dispatch = useDispatch();
    const { name, phone, email, id } = material;
    return (
        <div class="container bg-dark text-white">
            <div class="row top-buffer" >
                <div class="col-xs-2">
                    <div class="col-sm-4">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <label className="custom-control-label"></label>
                        </div>
                    </div>
                </div>
                <div class="col-xs-8">
                    <div class="col-xs-12">{name}</div>
                    <div class="col-xs-12">{phone}</div>
                </div>
                <div class="col-xs-2 ml-auto mr-3" id="actions">
                        <Link to={`/contacts/edit/${id}`}>
                            <span className="material-icons mr-2 icon-color">edit</span>
                        </Link>
                        <span
                            className="material-icons text-danger"
                            onClick={() => dispatch(deleteContact(id))}>  remove_circle
                        </span>
                    </div>
                
            </div>
            
        </div>
    )
}

export default Material
