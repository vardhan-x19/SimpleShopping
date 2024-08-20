import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:"wishListItems",
    initialState:[],
    reducers :{
        addwishListItems :(state,action)=>{
            return  state=[...state,action.payload];
        },
        removewishListItems: (state, action) => {
            return state=state.filter((item) => item.id !== action.payload);
        },   
    }
})

export default wishlistSlice;
export const wishListAction=wishlistSlice.actions;