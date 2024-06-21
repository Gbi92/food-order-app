export default function MealItem({ meal }) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(meal.price);

  return (
    <div className="meal-item">
      <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
      <h3>{meal.name}</h3>
      <div className="meal-item-price">{formattedPrice}</div>
      <div className="meal-item-description">{meal.description}</div>
      <button className="button meal-item-actions">Add to Cart</button>
    </div>
  );
}
