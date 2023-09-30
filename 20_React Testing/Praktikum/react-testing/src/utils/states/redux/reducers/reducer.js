import { createSlice } from "@reduxjs/toolkit";

function getItems() {
  const getItem = localStorage.getItem("products");

  if (getItem) {
    const parseProducts = JSON.parse(getItem);
    return parseProducts;
  }

  return [];
}

const initialState = {
  products: [
    {
      id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
      productName: "John",
      productCategory: "Doe",
      productFreshness: "Doe",
      productPrice: "Doe",
      image: "Doe",
      additionalDescription: "Doe",
    },
  ],
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      localStorage.setItem("products", JSON.stringify(action.payload));
    },
    editProducts: (state, action) => {

    },
    deleteProducts: (state, action) => {
 
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { setProducts, changeTheme, handleAuth, handleLogout } =
  sliceState.actions;
export default reducer;