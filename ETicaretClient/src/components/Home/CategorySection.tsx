import React from 'react'
import styles from "./category.module.css"
import { categories } from '../../data/product'
import type { Category } from '../../types/type'


const colorPalette = [
    { bg: '#fff0e4', text: '#ff6b00' },
    { bg: '#eaf3ff', text: '#2763b8' },
    { bg: '#eaf8ef', text: '#198754' },
    { bg: '#f5ecff', text: '#7c3aed' },
];


function CategorySection() {
    return (
        <div>
            <div style={{ height: "12px" }}>
            </div>

            <div className={styles.category}>
                <h2>Kategoriler</h2>
                <div className={styles.categoryItems}>

                    {
                        categories.map((cat, index) => {
                            const theme = colorPalette[index % colorPalette.length];
                            return (
                                <div key={cat.id} className={styles.categoryItem} style={{ backgroundColor: theme.bg }} >
                                    <h5 style={{ color: theme.text }}>{cat.name}</h5>
                                </div>
                            )
                        })
                    }


                </div>
            </div>


        </div>
    )
}

export default CategorySection