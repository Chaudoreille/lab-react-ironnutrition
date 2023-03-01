import { useState } from 'react';
import './App.css';
import foodsData from './foods.json';
import { Row, Col } from 'antd';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import SearchBar from './components/SearchBar';

function App() {
  const [foods, setFoods] = useState([...foodsData]);
  const [foodDisplay, setFoodsDisplay] = useState([...foodsData]);

  return (
    <div className="App">
      <FoodForm setFoods={setFoods} />
      <SearchBar foods={foods} setFoodDisplay={setFoodsDisplay} />
      <Row gutter={[20, 20]} align="stretch" justify="flex-start">
        {foodDisplay.map((item) => (
          <Col key={item.name}>
            <FoodBox {...item} setFoods={setFoods} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
