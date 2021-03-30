/* eslint eqeqeq: 0 */

import {CREATE_MATERIAL, GET_MATERIAL, UPDATE_MATERIAL, DELETE_MATERIAL} from '../constant/types' 

const initialState = {
    materials:
        [
            {
                "id": 1,
                "item": "BackPack",
                "volume": "4",
                "cost": 20, 
                "color":"#e6b105",
                "date":"2021-01-10"
            },
            {
                "id": 2,
                "item": "Map",
                "volume": "5",
                "cost": 40, 
                "color":"#F23D7A",
                "date":"2020-05-15"
            },
            {
                "id": 3,
                "item": "iPhone",
                "volume": "400",
                "cost": 100, 
                "color":"#C6B9F1",
                "date":"2018-08-15"
            },
            {
                "id": 4,
                "item": "iPad",
                "volume": "600",
                "cost": 200, 
                "color":"#1BECA0",
                "date":"2019-11-16"
            },
            {
                "id": 5,
                "item": "Tickets",
                "volume": "20000",
                "cost": 500, 
                "color":"#56D4FF",
                "date":"2016-11-29"
            },
        ]
}

export const materialReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MATERIAL : 
        return{
            ...state,
            materials : [action.payload,...state.materials]
        };
         
        case GET_MATERIAL : 
        let arr = state.materials.filter((material) => material.id == action.payload);
        arr = arr.values();
        for(let val of arr){
            arr = val;
        }
        return{
            ...state,
            material : arr,
        };

        case UPDATE_MATERIAL:
            return{
                ...state,
                materials : state.materials.map(material => 
                    material.id == action.payload.id ? action.payload : material
                    ),
            };

        case DELETE_MATERIAL:
            return{
                ...state,
                materials : state.materials.filter((material) => material.id != action.payload),
            }
        
        default:
            return state;
    }
}
