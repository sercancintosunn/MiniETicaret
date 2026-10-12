import React from 'react'
import styles from "./productCard.module.css"
import { useNavigate } from 'react-router-dom'
import type { ProductCardType } from '../../types/type'


function ProductCard({ product }: ProductCardType) {

    const { id, name, price, image } = product
    const navigate = useNavigate()



    return (
        <div onClick={() => navigate(`/products/${id}`)} className={styles.card}>
            <div className={styles.cardImage}>
                <img style={{ width: "300px", height: "110px" }} src={image} alt="" />
            </div>
            <div className={styles.cardBody}>
                <h4 className={styles.title}>{name}</h4>
                <span className={styles.price}>{price}₺ </span>
            </div>
        </div>

    )
}

export default ProductCard