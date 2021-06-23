import React, { useEffect ,useState} from 'react';
import classes from './AvailableMeals.module.css'
import MealItem from './MealsItem/MealsItem'
import Card from '../UI/Card'


const AvailableMeals = () => {

  const [Meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [HttpError, setHttpError] = useState();

  useEffect(() => {

    const fetchMeals = async () => {
       //setError(null);
      //note below we are calling the try catch method  and fetch method is  asynchronous and returning an error indiside of an aync fnction that error will reject that promise


     const response= await fetch('https://food-app-2209a-default-rtdb.firebaseio.com/Meaks.json');
     if(!response.ok)
     {
        throw new Error('Something Went Wrong!!');

     }
     const responseData=await response.json();
     const loadedMeals=[];
     for(const key in responseData )
     {

        loadedMeals.push({
          id:key,
          name:responseData[key].name,
          description:responseData[key].description,
          price:responseData[key].price


        })

     }
     setMeals(loadedMeals);
     setIsLoading(false);
    };
    
    fetchMeals().catch((error)=>{
      setIsLoading(false);
      setHttpError(error.message);

    });
    
  }, []);


   if(isLoading==true)
   {
     return <section className={classes.MealsLoading}>
       <p>Loading.........</p>
     </section>
   }
   if(HttpError)
   {
    return <section className={classes.MealsError}>
    <p>{HttpError}</p>
           </section>
   }


  const mealslist = Meals.map(meal => <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />);
  return( <section className={classes.meals}>
    <Card>
      <ul> {mealslist} </ul>
    </Card>


  </section>
  );

};
export default AvailableMeals;