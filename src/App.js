import { useState } from 'react';
import './App.css';
import foodsData from './foods.json';
import { Row, Col, Space } from 'antd';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import SearchBar from './components/SearchBar';
import Empty from './components/Empty';

function App() {
  const [foods, setFoods] = useState([...foodsData]);
  const [foodDisplay, setFoodsDisplay] = useState([...foodsData]);

  const setFoodsAndUpdateDisplay = (callback) => {
    setFoods(callback);
    setFoodsDisplay(callback);
  };

  return (
    <>
      <h1>IronNutrition</h1>
      <div className="App">
        <Space direction='vertical' size="large">
          <SearchBar foods={foods} setFoodsDisplay={setFoodsDisplay} />
          <FoodForm setFoods={setFoodsAndUpdateDisplay} />
          {(foodDisplay.length) ? (
            <Row gutter={[20, 20]} align="stretch" justify="flex-start">
              {foodDisplay.map((item) => (
                <Col key={item.name}>
                  <FoodBox {...item} setFoods={setFoodsAndUpdateDisplay} />
                </Col>
              ))}
            </Row>
          ) : (
            <Empty />
          )}
        </Space>
      </div>
    </>
  );
}

export default App;
