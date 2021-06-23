import React,{useRef} from 'react'
import classes from './Checkout.module.css'
const isEmpty= value => value.trim()==='';
const isNotFiveCharacters = value => value.trim().length !==5;
const Checkout=(props)=>{

    const nameInputref=useRef();
    const streetInputref=useRef();
    const postalCodeInputref=useRef();
    const cityInputref=useRef();

    const confirmHandler=(event)=>{
        event.preventDefault();
    }
    const enteredName=nameInputref.current.value;
    const enteredStreet=streetInputref.current.value;
  
   
return (<form  className={classes.form}  onSubmit={confirmHandler}> 

<div className={classes.control} >
<label htmlFor="name">Your Name</label>
<input type="text" id="name" ref={nameInputref}/>
</div>
<div className={classes.control}>
<label htmlFor="Street">Street</label>
<input type="text" id="Street" ref={streetInputref}/>
</div>
<div className={classes.control} >
<label htmlFor="PostalCode">PostalCode</label>
<input type="text" id="PostalCode" ref={postalCodeInputref} />
</div>
<div className={classes.control} >
<label htmlFor="City">City</label>
<input type="text" id="City" ref={cityInputref}/>
</div>
<div className={classes.actions}>
<button  type="button" onClick={props.onCancel}>  Cancel </button>

<button className={classes.submit}>  Confirm </button>
</div>
</form>

);

};
export  default Checkout;
