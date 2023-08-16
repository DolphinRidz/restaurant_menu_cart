import React from 'react';
import classes from './MealsSummary.module.css';
const MealsSummary = () => {
  return (
    <section className={classes.summary}>
    <h2>Delicious Homemade Bakes and Sweets</h2>
    <p>
      Choose your favorite meal from our broad selection of available meals
      and enjoy a delicious lunch or dinner at our Cafe.
    </p>
    <p>
      All our meals are cooked with high-quality ingredients, just-in-time and
      of course by experienced chefs! Homemade goodies are our specialities.
    </p>
  </section>
  )
}

export default MealsSummary;