import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './slices/basketSlice'
import productReducer from './slices/productSlice'


export const store = configureStore({
    reducer: {

        basket: basketReducer,
        products: productReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store