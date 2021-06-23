import React, { Fragment, useContext,useEffect,useState } from 'react';
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../Store/cart-context'
//Note now  by using useContext here  the header cart button will be revevaluated  by react whenever chanages and it changes when we update it cart provider component
const HeaderCartButton = (props) => {

    const [buttonisHighlighted,setbuttonisHighlighted]=useState(false);
    const cartCtx = useContext(CartContext);
    const {items}=cartCtx;
    const numberofCartItems = items.reduce((curNumber, item) => { return curNumber + item.amount }, 0);
   
   const ButtonClasses=`${classes.button} ${buttonisHighlighted?  classes.bump:''} `;
    useEffect(()=>{
   if(cartCtx.items.length===0)
   {
       return;

   }
        setbuttonisHighlighted(true);
      const timer=setTimeout(()=>  {

       setbuttonisHighlighted(false);

      },300)

        return ()=>{

    clearTimeout(timer);

        };
    },[items]);
   return (<button className={ButtonClasses} onClick={props.onClick}>

        <span className={classes.icon} >
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberofCartItems}
        </span>

    </button>
    );

};
export default HeaderCartButton;