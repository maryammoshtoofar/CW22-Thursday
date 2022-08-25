import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  products: [],
  loading: false,
  error: "",
};
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    axios.get("http://localhost:5000/products").then((res) => res.data);
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = "something went wrong..";
    },
  },
});
export default productSlice.reducer;
