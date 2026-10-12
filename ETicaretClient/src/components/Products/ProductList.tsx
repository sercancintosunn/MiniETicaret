import React from 'react'
import ProductCard from './ProductCard'
import styles from "./productList.module.css"

function ProductGrid() {
    return (
        <div >
            <div className={styles.productTitle}>
                <h3>Tüm Ürünler</h3>
            </div>
            <div className={styles.productGrid}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />


                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

                <ProductCard />
            </div>



        </div>
    )
}

export default ProductGrid