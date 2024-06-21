export async function fetchMeals() {
  const response = await fetch("http://localhost:3000/meals");
  
  if (!response.ok) {
    throw new Error("Failed to fetch meals");
  }

  const meals = await response.json();

  return meals;
}
