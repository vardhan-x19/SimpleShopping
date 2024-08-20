import { configureStore } from '@reduxjs/toolkit';
import itemSlice from './itemSlice';
import fetchingSlice from './fetching';
import bagItemSlice from './bag';
import wishlistSlice from './wishlist';

const myntraStore=configureStore({
 reducer:{
    defItems:itemSlice.reducer,
    fetchDone:fetchingSlice.reducer,
    addBagItems:bagItemSlice.reducer,
    wishListItems:wishlistSlice.reducer
 }
})

export default myntraStore;