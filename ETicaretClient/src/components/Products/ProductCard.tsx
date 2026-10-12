import React from 'react'
import styles from "./productCard.module.css"

function ProductCard() {
    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <span>Headset</span>
            </div>
            <div className={styles.cardBody}>
                <h4 className={styles.title}> Wireless HeadSet</h4>
                <span className={styles.price}>₺1.299</span>
            </div>
        </div>

    )
}

export default ProductCard