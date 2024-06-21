import { useState, useEffect } from "react";

import Header from "./components/Header";
import { fetchMeals } from "./http";

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
          <p key={meal.id}>{meal.name}</p>
        ))}
      </div>
    </>
  );
}

export default App;
