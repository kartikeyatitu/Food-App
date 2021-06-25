// The goal of this context is to manage the Cart Context data and provide that data to all  components that want acess to it
import React, { useReducer } from 'react';
import CartContext from './cart-context'
//Card Reducer doesnot need anything from the component and should not be reacreated everytime so outside of the component
//concat add new items to array but doent update the existing array creates a new array
const defaultCartState = {

    items: [],
    totalAmount: 0,
};
const CartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        //const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingCardItemsIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCardItem = state.items[existingCardItemsIndex];
       
    
        let updatedItems;
        if(existingCardItem)
        { 
      
            
          const   updatedItem={

                ...existingCardItem,
                amount:existingCardItem.amount+action.item.amount
            }
                updatedItems=[...state.items];
                updatedItems[existingCardItemsIndex]=updatedItem;
        }else
        {

             updatedItems = state.items.concat(action.item)
        }


        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount

        };
    };
    
    if(action.type==="REMOVE")
    {
       
        const existingCardItemsIndex = state.items.findIndex(item => item.id === action.id);
        const existingItem=state.items[existingCardItemsIndex];
        const updatedTotalAmount=state.totalAmount-existingItem.price;
        let updatedItems;
        if(existingItem.amount === 1)
        {
            //remove entire item filter is an builtin method which returns a new aaray
         updatedItems=state.items.filter(item=> item.id!=action.id);

        }
        else
        {
            //keep item and decreaser amount and price

              const updatedItem={...existingItem,amount:existingItem.amount-1};
              updatedItems=[...state.items]
              updatedItems[existingCardItemsIndex]=updatedItem;



        }
        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
    if(action.type==="CLEAR")
{
    return  defaultCartState;
    
}
    return defaultCartState;
};



const CartProvider = (props) => {
    //This here will be the concrete value context though which will be updated also and the wholw logic will reside here
    //Now with that we can use this cartProvider for all the elements which need access to the Carts
    //dispatch funciton has some property which allow us to identify what type of action is used here
    const [cartstate, dispatchCartAction] = useReducer(CartReducer, defaultCartState);
    const addItemAddHandler = item => {

        dispatchCartAction({

            type: 'ADD',
            item: item,


        })

    };

    const removeItemHandler = id => {

        dispatchCartAction({

            type: 'REMOVE',
            id: id,


        })


    };
    const clearCartItems =() =>
    {
        dispatchCartAction({type: 'CLEAR'});
    };
    const cartContext = {

        items: cartstate.items,
        totalAmount: cartstate.totalAmount,
        addItem: addItemAddHandler,
        removeItem: removeItemHandler,
        clearCart: clearCartItems,

    }
    return <CartContext.Provider value={cartContext}>

        {props.children}

    </CartContext.Provider>




}

export default CartProvider;