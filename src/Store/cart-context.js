import React from 'react'
//we got the cntext generally created


const CartContext=React.createContext({

  items:[],
  totalAmount:0,
  addItem: (item) => {},
  removeItem: (id)=> {},

}); 
export default CartContext;