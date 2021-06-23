import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import { useContext,useState } from 'react'
import CartContext from '../../Store/cart-context'
import CartItem from './CartItem'
import Checkout from  './Checkout'
//we built a Caet in modal through portals
//we also pass functions for adding or removing items from the Cart
const Cart = props => {
    
    const [isCheckOut,setisCheckOut]=useState(false);
    const CartCtx = useContext(CartContext);
    const TotalAmoun = `$${CartCtx.totalAmount.toFixed(2)}`;
    const HasItems = CartCtx.items.length > 0;
    const CartItemRemoveHandler=id=>  {
          
        CartCtx.removeItem(id);
    
    };
    const CartItemAddHandler=item=>  {

        CartCtx.addItem({...item,amount:1});
    };
   
    const orderHandler=()=>{
setisCheckOut(true);
        


    }
    
    const cartItems = <ul className={classes['cart-items']}>{CartCtx.items.map((item) =>
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={CartItemRemoveHandler.bind(null,item.id)}  onAdd={CartItemAddHandler.bind(null,item)}  />)}</ul>
    
      
        const modalActions=
        <div className={classes.actions}>

      <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
      {HasItems && <button className={classes.button} onClick={orderHandler} >Order</button>}
  </div>

        return (

        <Modal onClose={props.onClose}>

            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{TotalAmoun}</span>
            </div>
            {isCheckOut && <Checkout onCancel={props.onClose}/>}
            {!isCheckOut && modalActions}
            </Modal>

    );


};
export default Cart;