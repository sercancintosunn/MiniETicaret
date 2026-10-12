import React from 'react'
import styles from "./category.module.css"

function CategorySection() {
    return (
        <div>
            <div style={{ height: "12px" }}>
            </div>

            <div className={styles.category}>
                <h2>Kategoriler</h2>
                <div className={styles.categoryItems}>
                    <div className={styles.categoryItem} style={{ backgroundColor: '#fff0e4' }} >
                        <h5 style={{ fontSize: '15px', color: '#ff6b00' }}>Elektronik</h5>
                    </div>
                    <div className={styles.categoryItem} style={{ backgroundColor: "#eaf3ff" }}>
                        <h5 style={{ fontSize: '15px', color: '#2763b8' }}>Giyim</h5>
                    </div>
                    <div className={styles.categoryItem} style={{ backgroundColor: "#eaf8ef" }}>
                        <h5 style={{ fontSize: '15px', color: '#198754' }}>Ev&Yaşam</h5>
                    </div>
                    <div className={styles.categoryItem} style={{ backgroundColor: '#fff0e4' }}>
                        <h5 style={{ fontSize: '15px', color: '#ff6b00' }}>Spor</h5>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CategorySection