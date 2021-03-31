import {CREATE_MATERIAL, GET_MATERIAL, UPDATE_MATERIAL, DELETE_MATERIAL} from '../constant/types' 
//create action
export const addMaterial = (data) =>({
        type: CREATE_MATERIAL,
        payload: data,
});

//get action
export const getMaterial = (id) => ({
    type : GET_MATERIAL,
    payload : id, 
})

//update action
export const updateMaterial = (data) => ({
    type : UPDATE_MATERIAL,
    payload : data, 
})

//delete action
export const deleteMaterial = (id) => ({
    type: DELETE_MATERIAL,
    payload : id
})
