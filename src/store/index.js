import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/Cart-Slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
