import styles from "./productCard.module.css"
import { useNavigate } from 'react-router-dom'
import type { ProductCardProps } from '../../types/type'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../redux/store'
import { setSelectedProduct } from '../../redux/slices/productSlice'
import axios from "axios"




function ProductCard({ product }: ProductCardProps) {

    const { id, title, price, image } = product
    const dispatch = useDispatch<AppDispatch>()

    const navigate = useNavigate()

    const getAll = async () => {
        const response = await axios.get("https://localhost:7090/api/products")

        console.log(response.data)
    }




    const handleCardClick = () => {
        dispatch(setSelectedProduct(product))
        navigate(`/products/${id}`)
        getAll()
    }




    return (
        <div onClick={handleCardClick} className={styles.card}>
            <div className={styles.cardImage}>
                <img className={styles.cardImageItem} src={image} alt="" />
            </div>
            <div className={styles.cardBody}>
                <h4 className={styles.title}>{title}</h4>
                <span className={styles.price}>{price}₺ </span>
            </div>
        </div>

    )
}

export default ProductCard