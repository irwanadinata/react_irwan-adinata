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
    // set product
    setProducts: (state, action) => {
      state.products = action.payload;
      localStorage.setItem("products", JSON.stringify(action.payload));
    },

    // edit product
    editProduct: (state, action) => {
      const { id, updatedProduct } = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product.id === id
      );

      if (productIndex !== -1) {
        state.products[productIndex] = updatedProduct;
        localStorage.setItem("products", JSON.stringify(state.products));
      }
    },

    // delete product
    deleteProduct: (state, action) => {
      const idToDelete = action.payload;
      const newProducts = state.products.filter(
        (product) => product.id !== idToDelete
      );
      state.products = newProducts;
      localStorage.setItem("products", JSON.stringify(newProducts));
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { setProducts, editProduct, deleteProduct } =
  sliceState.actions;
export default reducer;