import React from 'react'
import styles from './Basket.module.css'
import { MdOutlineDelete } from "react-icons/md";

function BasketPage() {
    return (
        <div className={styles.body}>
            <div>
                <h2>Sepetim</h2>
            </div>

            <div className={styles.grid}>


                <div className={styles.cartRow}>
                    <div className={styles.cartImage}>
                        <img src="https://placehold.co/600x600?text=Kulaklik" alt="" />
                    </div>
                    <div>
                        <strong>Kulaklık</strong>
                    </div>
                    <div>
                        <span>1</span>
                        <span>x</span>
                        <span>1299₺</span>
                    </div>
                    <div>
                        <span className={styles.btnRemove}>
                            <button >
                                <MdOutlineDelete />Sil
                            </button>
                        </span>

                    </div>
                </div>
                <div className={styles.summary}>
                    <h3>Sepet Özeti</h3>
                    <div className={styles.summaryItems}>
                        <div className={styles.summaryItem}>
                            <span>Ara Toplam</span>
                            <span>1299₺</span>
                        </div>
                        <div className={styles.summaryItem}>
                            <span>Kargo Tutarı</span>
                            <span>59.99₺</span>
                        </div>
                        <div className={styles.summaryItem} style={{ borderBottom: "1px solid lightgrey " }}>
                            <span>Toplam</span>
                            <span>1350₺</span>
                        </div>
                        <button className={styles.summaryBtn}>Sepeti Onayla</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketPage