import {CREATE_RESTAURANT, GET_RESTAURANT, UPDATE_RESTAURANT } from '../constants/types'

const initialState = {
    restaurants: [
  {
    "id": 1,
    "name": "Indore Restaurant",
    "username": "irRestaurant",
    "email": "Sincere@april.biz",
    "address": "Kulas Light, Apt. 556, Gwenborough, 92998-3874",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
  },
  {
    "id": 2,
    "name": "Jaypur Restaurant",
    "username": "jpRestaurant",
    "email": "Shanna@melissa.tv",
    "address": "Victor Plains, Suite 879, Wisokyburgh, 90566-7771",
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
  },
  {
    "id": 3,
    "name": "Bangalore Restaurant",
    "username": "brRestaurant",
    "email": "Nathan@yesenia.net",
    "address": "Douglas Extension, Suite 847, McKenziehaven, 59590-4157",
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
  },
  {
    "id": 4,
    "name": "Mumbai Restaurant",
    "username": "mmRestaurant",
    "email": "Julianne.OConner@kory.org",
    "address": "Hoeger Mall, Apt. 692, South Elvis, 53919-4257",
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
  },
  {
    "id": 5,
    "name": "Chennai Restaurant",
    "username": "ciRestaurant",
    "email": "Lucio_Hettinger@annie.ca",
    "address": "Skiles Walks, Suite 351, Roscoeview, 33263",
    "phone": "(254)954-1289",
    "website": "demarco.info",
  },
  {
    "id": 6,
    "name": "Hyderabad Restaurant",
    "username": "hbdRestaurant",
    "email": "Karley_Dach@jasper.info",
    "address": "Norberto Crossing, Apt. 950, South Christy, 23505-1337",
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
  },
  {
    "id": 7,
    "name": "Hubli Restaurant",
    "username": "hlRestaurant",
    "email": "Telly.Hoeger@billy.biz",
    "address": "Rex Trail, Suite 280, Howemouth,58804-1099",
    "phone": "210.067.6132",
    "website": "elvis.io",
  },
  {
    "id": 8,
    "name": "Pune Restaurant",
    "username": "pnRestaurant",
    "email": "Sherwood@rosamond.me",
    "address": "Ellsworth Summit, Suite 729,Aliyaview, 45169",
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
  },
  {
    "id": 9,
    "name": "Goa Restaurant",
    "username": "gaRestaurant",
    "email": "Chaim_McDermott@dana.io",
    "address": "Dayna Park, Suite 449, Bartholomebury, 76495-3109",
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
  },
  {
    "id": 10,
    "name": "Shimla Restaurant",
    "username": "smRestaurant",
    "email": "Rey.Padberg@karina.biz",
    "address":  "Kattie Turnpike ,Suite 198,Lebsackbury ,31428-2261",
    "phone": "024-648-3804",
    "website": "ambrose.net",
  }
],
restaurant: null,
selectedRestaurants: [],
};

export const restaurantReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_RESTAURANT:
            return {
                ...state,
                restaurants: [action.payload, ...state.restaurants]
            }
        case GET_RESTAURANT:
            let arr = state.restaurants.filter((restaurant) => restaurant.id === action.payload);
            arr = arr.values();
            for(let val of arr){
                console.log(val)
                arr = val;
            }    
            return {
                    ...state,
                    restaurant: arr,
                }
        case UPDATE_RESTAURANT:
            return {
                ...state,
                restaurants: state.restaurants.map(restaurant => restaurant.id === action.payload.id ? action.payload : restaurant),
            }
        default:
            return state;
    }
};