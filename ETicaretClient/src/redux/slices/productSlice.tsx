import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { CreateProductDto, ProductDto } from "../../types/type";
import { productService } from "../../services/productService";


interface ProductState{
    products : ProductDto[],
    selectedProduct : ProductDto | null,
    listLoading: boolean,
    detailLoading: boolean,
    error: string | null,
    creating: boolean,
    updating : boolean, 
    deleting: boolean
}

const initialState : ProductState = {
    products: [],
    selectedProduct: null,
    listLoading: false,
    detailLoading: false,
    error: null,
    creating: false,
    updating : false,
    deleting:false
};

interface UpdateProductArgs{
    id: string,
    product : ProductDto
}


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

export const addProduct = createAsyncThunk<ProductDto,CreateProductDto,{rejectValue:string}>("products/addProduct",async(product,{rejectWithValue}) =>{
    try{
        return await productService.post(product);
    }catch(error){
        return rejectWithValue(
            error instanceof Error ? error.message : "Ürün eklenemedi"
        );
    }
})

export const updateProduct = createAsyncThunk<ProductDto,UpdateProductArgs,{rejectValue:string}>("products/updateProduct",async({id,product},{rejectWithValue}) => {
    try{
        return await productService.put(product,id);
    }catch(error){
        return rejectWithValue(
            error instanceof Error ? error.message : "Ürün Güncellenmedi"
        );
    }
})

export const deleteProduct = createAsyncThunk<string,string,{rejectValue:string}>("products/deleteProduct",async(id,{rejectWithValue}) =>{
    try{
        await productService.delete(id);
        return id;
    }catch(error){
        return rejectWithValue(
            error instanceof Error ? error.message : "Ürün silinemedi"
        )
    }
})



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
        .addCase(addProduct.fulfilled, (state,action) => {
            state.creating = false;
            state.products.push(action.payload);   
        })
        .addCase(addProduct.pending,(state) => {
            state.creating = true;
            state.error = null;
        })
        .addCase(addProduct.rejected,(state,action) => {
            state.creating = true;
            state.error = action.payload ?? "Ürün eklenemedi"
        })
        .addCase(updateProduct.pending,(state) => {
            state.updating = true;
            state.error = null
        })
        .addCase(updateProduct.fulfilled,(state,action) => {
            state.updating = false;

            const index = state.products.findIndex((p) => p.id === action.payload.id);

            if(index !== -1){
                state.products[index] = action.payload
            }

            if(state.selectedProduct?.id === action.payload.id){
                state.selectedProduct = action.payload
            }
        })
        .addCase(updateProduct.rejected,(state,action) => {
            state.updating = false;
            state.error = action.payload ?? "Ürün güncellenmedi"
        })
        .addCase(deleteProduct.pending,(state) => {
            state.deleting = true;
           state.error = null
        })
        .addCase(deleteProduct.fulfilled,(state,action) => {
            state.deleting = false;
            
            state.products = state.products.filter((p) => p.id !== action.payload)

            if(state.selectedProduct?.id === action.payload){
                state.selectedProduct = null
            }
        })
        .addCase(deleteProduct.rejected,(state,action) => {
            state.deleting = false;
            state.error = action.payload ?? "Ürün silinemedi"
        })
    }
})

export default productSlice.reducer;