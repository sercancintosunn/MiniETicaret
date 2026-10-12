import React from 'react'
import ProductCard from './ProductCard'
import styles from "./productList.module.css"
import { products } from '../../data/product'

function ProductGrid() {
    return (
        <div >
            <div className={styles.productTitle}>
                <h3>Tüm Ürünler</h3>
            </div>
            <div className={styles.productGrid}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>



        </div>
    )
}

export default ProductGrid