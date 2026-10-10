import React from 'react'
import styles from "./heroSection.module.css"
import Button from '@mui/material/Button';
import { FaArrowRight } from "react-icons/fa6";

function heroSection() {
    return (
        <div className={styles.container}>


            <div className={styles.heroSection}>
                <div>
                    <p>MiniETicaret'e hoş geldin</p>
                    <h1>Aradığın ürün, bir tık uzağında.</h1>
                    <p>Günlük ihtiyaçtan teknolojiye kadar seçtiğin ürünleri kolayca keşfet.</p>
                    <Button sx={{
                        backgroundColor: "#fff",
                        color: "#c94e00",
                        fontWeight: "800"

                    }} variant="contained" endIcon={<FaArrowRight />}>
                        Ürünleri Keşfet
                    </Button>
                </div>


            </div>

        </div>
    )
}

export default heroSection