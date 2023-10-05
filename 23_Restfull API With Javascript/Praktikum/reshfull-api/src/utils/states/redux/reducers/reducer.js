import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { setProducts } = sliceState.actions;
export default reducer;
