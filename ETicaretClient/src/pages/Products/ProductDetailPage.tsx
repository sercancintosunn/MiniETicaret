import { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import styles from './ProductDetailPage.module.css'
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

function ProductDetailPage() {

    const selectedProduct = useSelector((state: RootState) => state.products.selectedProduct)
    const [count, setCount] = useState(1)

    if (!selectedProduct) {
        return <div>Herhangi bir ürün seçilemedi.</div>
    }

    const { name, price, stock } = selectedProduct

    

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
                Home <IoIosArrowForward /> Products <IoIosArrowForward /> <b>aa</b>
            </div>
            <div className={styles.grid}>
                <div className={styles.imageSection}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfafbKW_55jYZaduATS_7gy8dkGB6MAe1-uRaAwpiMDA&s=10" alt="" />
                </div>
                <div className={styles.detail}>
                    <h1>{name}</h1>
                    <h2>{price}₺</h2>
                    <p>Magic Keyboard son derece rahat ve hassas bir yazma deneyimi sunuyor. Kablosuz ve şarj edilebilir olan bu klavyenin olağanüstü uzun ömürlü dahili pili, iki şarj arasında yaklaşık bir ay veya daha uzun bir süre güç sağlıyor.¹ Mac’inizle otomatik olarak eşleştiği için anında çalışmaya başlayabiliyorsunuz.

USB-C bağlantı noktasına sahip ve Mac'inizdeki bir USB-C bağlantı noktasına bağlanarak eşleştirme yapmanıza ve şarj etmenize olanak veren örgülü bir USB-C Şarj Kablosu ile birlikte sunuluyor. Böylece tüm favori aygıtlarınızı tek bir kabloyla şarj edebiliyorsunuz.</p>
                    <div>Stok:{stock}</div>
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