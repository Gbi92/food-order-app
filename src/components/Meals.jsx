import { useState, useEffect } from "react";

import MealItem from "./MealItem";
import { fetchMeals } from "../http";

export default function Meals() {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [mealsData, setMealsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchMeals();
        setMealsData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch meals" });
      }

      setIsFetching(false);
    }

    fetchData();
  }, []);

  return (
    <ul id="meals">
      {mealsData.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
