import { useState } from 'react';
import './App.css';
import foodsData from './foods.json';
import { Row, Col } from 'antd';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';

function App() {
  const [foods, setFoods] = useState(foodsData);
  return (
    <div className="App">
      <FoodForm settFoods={setFoods} />
      <Row gutter={[30, 30]} align="stretch" justify="flex-start">
        {foods.map((item) => (
          <Col key={item.name}>
            <FoodBox {...item} setFoods={setFoods} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
