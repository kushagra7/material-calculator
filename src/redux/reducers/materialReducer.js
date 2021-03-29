import {CREATE_MATERIAL, GET_MATERIAL, UPDATE_MATERIAL, DELETE_MATERIAL} from '../constant/types' 

const initialState = {
    materials:
        [
            {
                "id": 1,
                "item": "Table",
                "volume": "4",
                "cost": 20, 
                "color":"#e6b105",
            },
            {
                "id": 2,
                "item": "Map",
                "volume": "5",
                "cost": 40, 
                "color":"#F23D7A",
            },
            {
                "id": 3,
                "item": "iPhone",
                "volume": "400",
                "cost": 100, 
                "color":"#C6B9F1",
            },
            {
                "id": 4,
                "item": "laptop",
                "volume": "600",
                "cost": 200, 
                "color":"#1BECA0",
            },
            {
                "id": 5,
                "item": "car",
                "volume": "20000",
                "cost": 500, 
                "color":"#56D4FF",
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
