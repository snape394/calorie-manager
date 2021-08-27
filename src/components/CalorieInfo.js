import React, {useState} from "react";
import Header from "./Header";
import Alert from '@material-ui/lab/Alert';

const CalorieInfo = ({meals,overCalorie}) =>{


    let totalCalories = 0,mealsCount = 0,overCalorieMessage=false
    for (let el in meals){
        mealsCount+=1
        totalCalories+= parseInt(meals[el].calorie)
    }
    if(totalCalories>2000){
        overCalorieMessage = true
    }

    return (
        <>
        <Header title={"Today's Calorie Info:"} showButton={false}>

        </Header>
        <div className='task'>
            <h3>Total Calorie Count :{totalCalories}</h3>
            <h3>Total Meal Count :{mealsCount} </h3>
            <h3>Daily Calorie Limit :{2000} </h3>
        </div>
            {overCalorieMessage ?
            <Alert severity="warning">Your daily calories are over 2000 cal. Reduce Calories or Meals</Alert>:
                <Alert severity="success">Great! you have balanced your calories.</Alert>
            }
            </>
    )
}

export default CalorieInfo