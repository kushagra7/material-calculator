import React from 'react'
import '../../styles/App.scss';
import { Link } from 'react-router-dom';
import { deleteMaterial } from '../../redux/actions/materialAction';
import { useDispatch } from 'react-redux';

const Material = ({ material }) => {
    const dispatch = useDispatch();
    const { id, item, volume, cost, color } = material;
    return (
        <div class="container card-color text-white">
            <div class="row top-buffer" >
                <div class="col-xs-2">
                    <div class="col-sm-4">
                        <input
                            disabled
                            className="color-picker"
                            type='color'
                            value={color}
                        />
                    </div>
                </div>
                <div class="col-xs-8">
                    <div class="col-xs-12">{item}</div>
                    <div class="col-xs-12">Volume : {volume} m<sup>3</sup></div>
                    <div class="col-xs-12">Cost : {cost} $</div>
                </div>
                <div class="col-xs-2 ml-auto mr-3" id="actions">
                    <Link to={`/materials/edit/${id}`}>
                        <span className="material-icons mr-2 icon-color">edit</span>
                    </Link>
                    <span className="material-icons text-danger"
                        onClick={() => dispatch(deleteMaterial(id))}> remove_circle</span>
                </div>
            </div>
        </div>
    )
}

export default Material
