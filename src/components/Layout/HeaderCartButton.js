import React from 'react';
import cartSvg from '../../assets/cart.svg'
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = () => {
  return (
    <>
    <button className={classes.button}>
        <span className={classes.icon}>
        <img className={classes.icon} src={cartSvg} alt="Cart icon" />
        </span>
        <span>Cart</span>
        <span className={classes.badge}>3</span>
    </button>
    </>
  )
}

export default HeaderCartButton;