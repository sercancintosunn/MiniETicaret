import { useEffect } from 'react'
import styles from "./productList.module.css"
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../../redux/store'
import { fetchProducts } from '../../redux/slices/productSlice'
import type { RootState } from '../../redux/store'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import ProductCard from './ProductCard'


function ProductList() {


    const dispatch = useDispatch<AppDispatch>()

    const { products, loading, error } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(fetchProducts() as any)
    }, [dispatch])

    if (loading) {
        return (
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={loading}

            >
                <CircularProgress color="inherit" />
            </Backdrop>
        )
    }

    if (error) {
        return <div style={{ color: 'red' }}>Hata: {error}</div>;
    }




    return (
        <div >
            <div className={styles.productTitle}>
                <h3>Tüm Ürünler</h3>
            </div>
            <div className={styles.productGrid}>

                {
                    products && products.map((product) => {
                        return <ProductCard key={product.id} product={product} />
                    })

                }

            </div>



        </div>
    )
}

export default ProductList