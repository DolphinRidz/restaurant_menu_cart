import React from 'react'
import mealImg from '../../assets/reactmeal.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Vaastu Cafe</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealImg} alt="Delicious meals" />
            </div>

        </>
    )
}

export default Header;