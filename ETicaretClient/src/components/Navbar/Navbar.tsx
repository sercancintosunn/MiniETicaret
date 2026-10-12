import React from 'react'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { IoSearchOutline } from "react-icons/io5";
import InputAdornment from '@mui/material/InputAdornment';
import { SlBasket } from "react-icons/sl";
import { MdAccountCircle } from "react-icons/md";
import styles from "./Navbar.module.css";
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

function Navbar() {
    const textFieldId = React.useId();
    return (
        <div className={styles.header}>
            <div >
                <h1 className={styles.title}>MiniETicaret</h1>
            </div>



            <div className={styles.navigationSearchGroup}>
                <TextField className={styles.navigationSearchGroupItem}
                    id={`${textFieldId}-input`}
                    label="Ürün veya kategori Ara"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IoSearchOutline />
                                </InputAdornment>
                            ),
                        },
                    }}
                    variant="standard"
                    sx={{

                        "& .MuiInputLabel-root": { color: "#25170f" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "#ff6b00" },


                        "& .MuiInput-input": { color: "#f1dfd0" },

                        "& .MuiInput-underline:before": { borderBottomColor: "#f1dfd0," },
                        "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "#ff6b00" },
                        "& .MuiInput-underline:after": { borderBottomColor: "#ff6b00" },
                    }}
                />

            </div>


            <div className={styles.navigationAction}>
                <Link className={`${styles.navigationActionItem} ${styles.navigationLink}`} to="/">Home</Link>
                <Link className={`${styles.navigationActionItem} ${styles.navigationLink}`} to="/products">Products</Link>
                <Link className={`${styles.navigationActionItem} ${styles.navigationLink}`} to="/categories">Categories</Link>
                <Link className={`${styles.navigationActionItem} ${styles.navigationLink}`} to="/basket">
                    <IconButton >
                        <Badge
                            badgeContent={3}
                            color="warning"
                            sx={{
                                "& .MuiBadge-badge": {
                                    fontSize: "10px",
                                    height: "15px",
                                    padding: "0 5px",
                                }
                            }}
                        >
                            <SlBasket className={styles.icons} />
                        </Badge>
                    </IconButton>
                </Link>
                <Link className={`${styles.navigationActionItem} ${styles.navigationLink}`} to="/login"><MdAccountCircle style={{ fontSize: '30px' }} /></Link>

            </div>

        </div >
    )
}

export default Navbar