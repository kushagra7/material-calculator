import {CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT} from '../constant/types' 

const initialState = {
    contacts:
        [
            {
                "id": 1,
                "item": "Table",
                "volume": "4",
                "cost": "27", 
                "color":"#e6b105",
            },
            {
                "id": 2,
                "item": "Map",
                "volume": "5",
                "cost": "27", 
                "color":"#F23D7A",
            },
            {
                "id": 3,
                "item": "iPhone",
                "volume": "300",
                "cost": "27", 
                "color":"#C6B9F1",
            },
            {
                "id": 4,
                "item": "laptop",
                "volume": "500",
                "cost": "40", 
                "color":"#1BECA0",
            },
            {
                "id": 5,
                "item": "car",
                "volume": "1000",
                "cost": "174", 
                "color":"#56D4FF",
            },
        ],
    contact:null,
}

export const materialReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CONTACT : 
        return{
            ...state,
            contacts : [action.payload,...state.contacts]
        };
         
        case GET_CONTACT : 
        let arr = state.contacts.filter((contact) => contact.id == action.payload);
        arr = arr.values();
        for(let val of arr){
            arr = val;
        }
        return{
            ...state,
            contact : arr,
        };

        case UPDATE_CONTACT:
            return{
                ...state,
                contacts : state.contacts.map(contact => 
                    contact.id == action.payload.id ? action.payload : contact
                    ),
            };

        case DELETE_CONTACT:
            return{
                ...state,
                contacts : state.contacts.filter((contact) => contact.id != action.payload),
            }
        
        default:
            return state;
    }
}
