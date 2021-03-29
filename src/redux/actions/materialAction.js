import {CREATE_MATERIAL, GET_MATERIAL, UPDATE_MATERIAL, DELETE_MATERIAL} from '../constant/types' 

export const addMaterial = (contact) =>({
        type: CREATE_MATERIAL,
        payload: contact,
});

//get contact action
export const getContact = (id) => ({
    type : GET_MATERIAL,
    payload : id, 
})

//update contact action
export const updateContact = (contact) => ({
    type : UPDATE_MATERIAL,
    payload : contact, 
})

//delete contact action
export const deleteContact = (id) => ({
    type: DELETE_MATERIAL,
    payload : id
})
