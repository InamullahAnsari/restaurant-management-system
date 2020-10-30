import {CREATE_RESTAURANT, DELETE_RESTAURANT, GET_RESTAURANT, UPDATE_RESTAURANT, SELECT_RESTAURANT, CLEAR_RESTAURANT, DELETE_SELECTED_RESTAURANTS} from '../constants/types'

// actions
export const addRestaurant = (restaurant) => ({
        type: CREATE_RESTAURANT,
        payload: restaurant
});

// get a restaurant
export const getRestaurant = (id) => ({
    type: GET_RESTAURANT,
    payload: id,
});

// UPDATE A restaurant
export const updateRestaurant = (restaurant) => ({
    type: UPDATE_RESTAURANT,
    payload: restaurant,
});

// DELETE A restaurant
export const deleteRestaurant = (id) => ({
    type: DELETE_RESTAURANT,
    payload: id,
});

// SELECT ALL restaurant
export const selectAllRestaurant = (id) => ({
    type: SELECT_RESTAURANT,
    payload: id,
});

// CLEAR SELECTED restaurants
export const clearAllRestaurant = () => ({
    type: CLEAR_RESTAURANT,
});

// DELETE SELECTED restaurant
export const deleteAllRestaurant = (payload) => ({
    type: DELETE_SELECTED_RESTAURANTS,
    payload
})




