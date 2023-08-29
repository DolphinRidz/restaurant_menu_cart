import { useContext } from 'react';
import React from 'react';
import cartSvg from '../../assets/cart.svg';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const noOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber+item.amount;
  }, 0);
  return (
    <>
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
        <img className={classes.icon} src={cartSvg} alt="Cart icon" />
        </span>
        <span>Cart</span>
        <span className={classes.badge}>{noOfCartItems}</span>
    </button>
    </>
  )
}

export default HeaderCartButton;