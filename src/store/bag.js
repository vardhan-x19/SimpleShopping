import { createSlice } from "@reduxjs/toolkit";

const bagItemSlice=createSlice({
    name:"addBagItems",
    initialState:[],
    reducers :{
        addItemsToBag :(state,action)=>{
            return  state=[...state,action.payload];
        },
        removeItemsFromBag: (state, action) => {
            return state=state.filter((item) => item.id !== action.payload);
        },   
    }
})

export default bagItemSlice;
export const bagItemsActions=bagItemSlice.actions;