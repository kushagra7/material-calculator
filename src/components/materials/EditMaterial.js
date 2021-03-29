import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMaterial, updateMaterial } from '../../redux/actions/materialAction'
import { useParams, useHistory } from 'react-router-dom';

const EditMaterial = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    //in reducer we have material representing whole reducer for full reducer
    const material = useSelector(state => state.material.material);
    const [email, setEmail] = useState("");

    const [item, setItem] = useState("");
    const [volume, setVolume] = useState("");
    const [cost, setCost] = useState("");
    const [color, setColor] = useState("#1bcbf2");
    let { id } = useParams();

    useEffect(() => {
        if (material != null) {
            setItem(material.item)
            setVolume(material.volume)
            setCost(material.cost)
            setColor(material.color)
        }
        dispatch(getMaterial(id))
    }, [material]);

    const onUpdateMaterial = (e) => {
        e.preventDefault();

        const update_material = Object.assign(material, {
            item: item,
            volume: volume,
            cost: cost,
            color: color
        })

        dispatch(updateMaterial(update_material));
        history.push('/')
    };

    return (
        <div className='card card-color border-0 shadow'>
            <div className="card-header">
                <h4>Edit Material</h4>
            </div>
            <div className="card-body">
                <form onSubmit={(e) => onUpdateMaterial(e)}>
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
                                    <select
                                        className="browser-default custom-select"
                                        onChange={(e) => setVolume(e.target.value)}
                                    >
                                        <option>500</option>
                                        <option value="10000">10000</option>
                                        <option value="20000">20000</option>
                                        <option value="30000">30000</option>
                                        <option value="40000">40000</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <h6>Cost(USD per m<sup>3</sup>)</h6>
                                <div >
                                    <select
                                        className="browser-default custom-select"
                                        onChange={(e) => setCost(parseInt(e.target.value))}
                                    >
                                        <option>0 $</option>
                                        <option value="100">100 $</option>
                                        <option value="500">500 $</option>
                                        <option value="1000">1000 $</option>
                                        <option value="5000">5000 $</option>
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
                            <button id="btn" className='btn btn-warning' type='submit'> Update Material</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditMaterial
