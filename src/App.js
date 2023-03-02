import { useState } from 'react';
import './App.css';
import foodsData from './foods.json';
import { Row, Col, Space } from 'antd';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import SearchBar from './components/SearchBar';

function App() {
  const [foods, setFoods] = useState([...foodsData]);
  const [foodDisplay, setFoodsDisplay] = useState([...foodsData]);

  const setFoodsAndUpdateDisplay = (callback) => {
    setFoods(callback);
    setFoodsDisplay(callback);
  };

  return (
    <div className="App">
      <Space direction='vertical' size="large">
        <FoodForm setFoods={setFoodsAndUpdateDisplay} />
        <SearchBar foods={foods} setFoodsDisplay={setFoodsDisplay} />
        <Row gutter={[20, 20]} align="stretch" justify="flex-start">
          {foodDisplay.map((item) => (
            <Col key={item.name}>
              <FoodBox {...item} setFoods={setFoodsAndUpdateDisplay} />
            </Col>
          ))}
        </Row>
      </Space>
    </div>
  );
}

export default App;
