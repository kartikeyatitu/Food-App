import React, { Fragment } from 'react';
//Here it will be two sections 1. The header section and 2nd The image below the header
//we can import images below method is a way to import images locally but if the image is on the server
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header = (props) => {

    return <Fragment>

        <header className={classes.header}>
            <h1>ReactMeals</h1>
         <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
         <img src={mealsImage} alt="A table full of delicios food"/>
        </div> 
         </Fragment>


}
export default Header;