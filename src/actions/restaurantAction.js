import {CREATE_RESTAURANT, GET_RESTAURANT, UPDATE_RESTAURANT } from '../constants/types'

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




