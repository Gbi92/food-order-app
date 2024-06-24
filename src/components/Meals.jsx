import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";

const requestConfig = {}; // to avoid infinite loop! -- this way the object is not recreated

export default function Meals() {
  const {
    data: mealsData,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p>Fetching meals...</p>;
  }

  return (
    <ul id="meals">
      {mealsData.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
