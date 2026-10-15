import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import styles from './ProductDetailPage.module.css'
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

function ProductDetailPage() {

    const selectedProduct = useSelector((state: RootState) => state.products.selectedProduct)

    if (!selectedProduct) {
        return <div>Herhangi bir ürün seçilemedi.</div>
    }

    const { image, description, title, price, rating, category } = selectedProduct

    const [count, setCount] = useState(1)

    const handleDecrease = () => {
        setCount((prev) => {
            return prev > 1 ? prev - 1 : 1
        })
    }

    const handleIncrease = () => {
        setCount((prev) => {
            return prev + 1
        })
    }



    return (
        <div>
            <div className={styles.crumb}>
                Home <IoIosArrowForward /> Products <IoIosArrowForward /> <b>{category}</b>
            </div>
            <div className={styles.grid}>
                <div className={styles.imageSection}>
                    <img src={image} alt="" />
                </div>
                <div className={styles.detail}>
                    <h1>{title}</h1>
                    <h2>{price}₺</h2>
                    <p>{description}</p>
                    <div>Stok:{rating.count}</div>
                    <div className={styles.buyRow}>
                        <div className={styles.quantity}>
                            <button className={styles.btn} onClick={handleDecrease}>-</button>
                            <span>{count}</span>
                            <button className={styles.btn} onClick={handleIncrease}>+</button>
                        </div>
                        <button className={styles.btnPrimary}>Sepete Ekle</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage