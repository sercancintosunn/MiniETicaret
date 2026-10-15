import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../../types/type'
import axios from 'axios';


interface ProductSlice {
    products: Product[],
    loading: boolean,
    selectedProduct: Product | null,
    error: string | null
}


const initialState: ProductSlice = {
    products: [],
    selectedProduct: null,
    loading: false,
    error: null
}


const BASE_URL = "https://fakestoreapi.com/"

export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>('products/fetchProducts', async (_, thunkAPI) => {
    try {
        const response = await axios.get<Product[]>(`${BASE_URL}/products`);

        return response.data
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message || "Bir hata oluştu");
    }
})


export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
            state.selectedProduct = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Bilinmeyen bir hata oluştu"
            });
    }
})

export const { setSelectedProduct } = productSlice.actions


export default productSlice.reducer