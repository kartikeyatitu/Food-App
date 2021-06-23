import React, { useRef,useState } from 'react'

import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import MealItem from './MealsItem'
//const enteredAmount=amountInputRef.current.value; yaha se jobhi value aati hai vo string hoti hai 

const MealItemForm = (props) => {

    const amountInputRef = useRef();
    const [amountIsValid,setamountIsValid]=useState(true);

    const SubmitHandler = (event) => {
    

        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if(enteredAmount.trim().length === 0 || enteredAmountNumber<1 || enteredAmountNumber>5)
        {
            setamountIsValid(false);
            return;
        }

        
        
          props.onAddToCart(enteredAmountNumber);
        
    };

    return <form className={classes.form} onSubmit={SubmitHandler}>

        <Input label="Amount"    ref= { amountInputRef } input={{

          
            id: 'amount' + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1"
        }} />
        <button>
            +Add
   </button>
   {!amountIsValid && <p>Please Enter a Valid Input</p>}



    </form>



}
export default MealItemForm;