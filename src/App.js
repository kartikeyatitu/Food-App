//Note Important Point Where we will need the Cart Provider Component ;
//In this component and on Header Cart Meals  components  
import React,{Fragment,useState} from 'react'
import Cart from './Components/Cart/Cart';
import Header from './Components/LAYOUT/Header'
import Meals from './Components/Meals/Meals'
import CartProvider from './Store/Cart-Provider';
function App() {

  const [cartIsShown,setCartIsShown]=useState(false);
  const showCartHandler=()=>{

    setCartIsShown(true);
  };
  const hideCartHandler=()=>{

    setCartIsShown(false);
  };
  
  return (
    
    <CartProvider>
    { cartIsShown && <Cart onClose={hideCartHandler}/>}
     <Header  onShowCart={showCartHandler}/> 
     <main>

<Meals/>
     </main>
     </CartProvider>
    
  );
}

export default App;
