import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ProductDto } from "../../types/type";
import { productService } from "../../services/productService";

interface ProductState{
    products : ProductDto[],
    selectedProduct : ProductDto | null,
    listLoading: boolean,
    detailLoading: boolean,
    error: string | null
}

const initialState : ProductState = {
    products: [],
    selectedProduct: null,
    listLoading: false,
    detailLoading: false,
    error: null,
};


export const fetchProducts = createAsyncThunk<ProductDto[],void,{rejectValue:string}>("products/fetchAll",async(_,{rejectWithValue}) =>{
    try{
        return await productService.getAll();
    }
    catch(error){
        return rejectWithValue(
            error instanceof Error ? error.message : "Ürünler alınamadı"
        );
    }
})

export const fetchProductById = createAsyncThunk<ProductDto,string,{rejectValue:string}>("products/fetchById",async(id,{rejectWithValue}) => {
    try{
        return await productService.getById(id);
    }
    catch(error){
        return rejectWithValue(
            error instanceof Error ? error.message : "Ürün bulunamadı"
        );
    }
});

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.listLoading = true;
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled, (state,action) => {
            state.listLoading = false;
            state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state,action) => {
            state.listLoading = false;
            state.error = action.payload ?? action.error.message ?? "Bir hata oluştu";
        })
        .addCase(fetchProductById.pending,(state) => {
            state.listLoading = true;
            state.error = null;
        })
        .addCase(fetchProductById.fulfilled, (state,action) => {
            state.listLoading = false;
            state.selectedProduct = action.payload;
        })
        .addCase(fetchProductById.rejected,(state,action)=>{
            state.listLoading = false;
            state.error = action.payload ?? action.error.message ?? "Bir hata oluştu";
        })
    }
})

export default productSlice.reducer;