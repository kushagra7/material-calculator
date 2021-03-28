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
