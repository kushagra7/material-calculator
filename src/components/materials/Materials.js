import React from 'react'
import { useSelector } from 'react-redux';
import Material from './Material';

export default function Materials() {
    const materials = useSelector(state => state.material.materials);
    // console.log(materials);
    var totalCost = 0;

    materials.map(e => (
        totalCost += e.cost
    ))

    return (
        <div>
            <table class="table shadow">
                <thead>
                </thead>
                <tbody>
                    {
                        materials.map(material => (
                            <Material material={material} key={material.id} />
                        ))
                    }
                </tbody>
            </table>

            <div class="row ">
                <div class="col">
                    <h5 class="text-white">Total Cost : {totalCost} $</h5>
                </div>
            </div>
        </div>
    )
}
