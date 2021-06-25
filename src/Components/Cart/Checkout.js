import React,{useRef, useState} from 'react'
import classes from './Checkout.module.css'
const isEmpty = value => value.trim()==='';
const isFiveCharacters = value => value.trim().length ===5;



const Checkout=(props)=>{

     const [formInputValidity,setformInputValidity]=useState({
       name:true,
       street:true,
       city:true,
       postalCode:true,
     });

    const nameInputref=useRef();
    const streetInputref=useRef();
    const postalCodeInputref=useRef();
    const cityInputref=useRef();

    const confirmHandler=(event)=>{
        event.preventDefault();
    
    const enteredName=nameInputref.current.value;
    const enteredStreet=streetInputref.current.value;
    const enteredPostalCode=postalCodeInputref.current.value;
    const enteredCity=cityInputref.current.value;
    
     const enteredNameIsValid=!isEmpty(enteredName);
     const enteredStreetIsValid=!isEmpty(enteredStreet);
     const enteredPostalCodeisValid=isFiveCharacters(enteredPostalCode);
     const enteredCityIsValid=!isEmpty(enteredCity);
    
     setformInputValidity({
      
         name:enteredNameIsValid,
         street:enteredStreetIsValid,
         city:enteredCityIsValid,
         postalCode:enteredPostalCodeisValid,


     });



     const formisValid= enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalCodeisValid
     if(!formisValid)
     {//send user a message and make user awware
         return; 
     }
     //Submit cart data to backend
     props.onConfirm({

          name:enteredName,
          street:enteredStreet,
          city:enteredCity,
           postalCode:enteredPostalCode,
       });
    };
    const namedControlClassed=`${classes.control} ${formInputValidity.name ? '' :classes.invalid}`;
    const streetControlClassed=`${classes.control} ${formInputValidity.street ? '' :classes.invalid}`;
    const cityControlClassed=`${classes.control} ${formInputValidity.city ? '' :classes.invalid}`;
    const postalCodeControlClassed=`${classes.control} ${formInputValidity.postalCode ? '' :classes.invalid}`;


return (<form  className={classes.form}  onSubmit={confirmHandler}> 

<div className={namedControlClassed} >
<label htmlFor="name">Your Name</label>
<input type="text" id="name" ref={nameInputref}/>
{!formInputValidity.name && <p> Please enter a valid name </p>}
</div>
<div className={streetControlClassed}>
<label htmlFor="Street">Street</label>
<input type="text" id="Street" ref={streetInputref}/>
{!formInputValidity.street && <p> Please enter a valid street </p>}
</div>
<div className={postalCodeControlClassed} >
<label htmlFor="PostalCode">PostalCode</label>
<input type="text" id="PostalCode" ref={postalCodeInputref} />
{!formInputValidity.postalCode && <p> Please enter a valid PostalCode </p>}
</div>
<div className={cityControlClassed} >
<label htmlFor="City">City</label>
<input type="text" id="City" ref={cityInputref}/>
{!formInputValidity.city && <p> Please enter a valid City </p>}
</div>

<div className={classes.actions}>
<button  type="button" onClick={props.onCancel}>  Cancel </button>

<button className={classes.submit}>  Confirm </button>
</div>
</form>

);

};
export  default Checkout;
