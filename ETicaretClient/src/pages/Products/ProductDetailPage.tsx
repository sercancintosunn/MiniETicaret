import React, { useState } from 'react'
import { products } from '../../data/product'
import { useParams } from 'react-router-dom'
import { categories } from '../../data/product'
import { IoIosArrowForward } from "react-icons/io";
import styles from './ProductDetailPage.module.css'

function ProductDetailPage() {

    const { id } = useParams()

    const product = products.find((p) => p.id === Number(id));

    const category = categories.find((cat) => cat.id === product?.categoryId)

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
                Home <IoIosArrowForward /> Products <IoIosArrowForward /> <b>{category?.name}</b>
            </div>
            <div className={styles.grid}>
                <div className={styles.imageSection}>
                    <img src={product?.imageUrl} alt="" />
                </div>
                <div className={styles.detail}>
                    <h1>{product?.name}</h1>
                    <h2>{product?.price}₺</h2>
                    <p>{product?.description}</p>
                    <div>Stok:{product?.stock}</div>
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