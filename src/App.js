import { useState } from 'react';
import './App.css';
import foodsData from './foods.json';

function App() {
  const [foods, setFoods] = useState(foodsData);
  return (
    <div className="App">
      {foods.map((item) => {
        return (
          <div key={item.name}>
            <p>{item.name}</p>
            <img src={item.image} width={100} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default App;
