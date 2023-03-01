import { useState } from 'react';
import './App.css';
import foodsData from './foods.json';

function FoodBox(props) {
  const { name, image, calories, servings, setFoods } = { ...props };
  function deleteFoodBox(name) {
    return () => {
      setFoods((foods) => {
        return foods.filter((food) => food.name !== name);
      });
    };
  }

  return (
    <div>
      <p>{name}</p>
      <img src={image} width={100} alt="" />
      <p>
        <span>Calories:</span> <span>{calories}</span>
      </p>
      <p>
        <span>Servings:</span>
        <span>{servings}</span>
      </p>
      <p>
        <span>Total Calories:</span>
        <span>{calories * servings}</span>
      </p>
      <button onClick={deleteFoodBox(name)}>Delete</button>
    </div>
  );
}

function App() {
  const [foods, setFoods] = useState(foodsData);
  return (
    <div className="App">
      {foods.map((item) => (
        <FoodBox key={item.name} {...item} setFoods={setFoods} />
      ))}
    </div>
  );
}

export default App;
