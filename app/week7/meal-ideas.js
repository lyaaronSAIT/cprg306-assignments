"use client"
import React, { useEffect, useState } from "react";

const MealIdeas = ({ ingredients }) => {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas() {
        const ingredientName = ingredients.replace(/\p{Emoji}/gu, '');
        try {
            const reponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientName}`)
            const data = await reponse.json();
            return data.meals || [];
        } catch (error) {
            console.error('Error fetching meal ideas:', error);
            return [];
        }
    };

    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredients);
        setMeals(mealIdeas);
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredients]);

    return (
        <div>
            <h2>Meal Ideas With {ingredients}</h2>
            <ul>
                {meals.map((meal) => (
                    <li key = { meal.idMeal }>
                        <img scr = {meal.strMealThumb} alt = {meal.strMeal}></img>
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MealIdeas;