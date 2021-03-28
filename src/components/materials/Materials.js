import React from 'react'
import { useSelector } from 'react-redux';
import Material from './Material';

export default function Materials() {
    const materials = useSelector(state => state.contact.contacts);
    console.log(materials);

    return (
        <div>
            <table class="table shadow">
                <thead>
                    <tr>
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" />
                                <label className="custom-control-label"></label>
                            </div>
                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        materials.map(material => (
                            <Material material={material} key={material.id}/>
                            ))
                    }
                </tbody>
            </table>
        </div>
    )
}
