import styles from "./productCard.module.css"
import { useNavigate } from 'react-router-dom'
import type {ProductDtoProps } from '../../types/type'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../redux/store'
import { fetchProductById } from "../../redux/slices/productSlice"




function ProductCard({ product }: ProductDtoProps) {

    const { id, name, price, stock } = product
    const dispatch = useDispatch<AppDispatch>()

    const navigate = useNavigate()

    

    const handleCardClick = () => {
        dispatch(fetchProductById(id))
        navigate(`/products/${id}`)
    }




    return (
        <div onClick={handleCardClick} className={styles.card}>
            <div className={styles.cardImage}>
                <img className={styles.cardImageItem} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfafbKW_55jYZaduATS_7gy8dkGB6MAe1-uRaAwpiMDA&s=10" alt="" />
            </div>
            <div className={styles.cardBody}>
                <h4 className={styles.title}>{name}</h4>
                <span className={styles.price}>{price}₺ </span>
            </div>
        </div>

    )
}

export default ProductCard