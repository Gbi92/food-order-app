import { useState, useEffect } from "react";

import Header from "./components/Header";
import { fetchMeals } from "./http";
import MealItem from "./components/MealItem";

function App() {
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
    <>
      <Header />
      <div id="meals">
        {mealsData.map((meal) => (
          <MealItem meal={meal} key={meal.id} />
        ))}
      </div>
    </>
  );
}

export default App;
