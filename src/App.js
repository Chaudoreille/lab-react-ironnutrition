import { useState } from 'react';
import './App.css';
import foodsData from './foods.json';
import { Card, Row, Col, Divider, Input, Button, Space } from 'antd';

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
    <Card
      title={name}
      size="medium"
      hoverable="true"
      style={{
        justifySelf: 'stretch',
        textAlign: 'left',
      }}
    >
      <Space direction="vertical" size="middle">
        <div
          style={{
            display: 'flex',
            height: '100px',
            width: '150px',
            margin: 'auto',
          }}
        >
          <img
            src={image}
            alt=""
            style={{
              objectFit: 'contain',
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          />
        </div>
        <div>
          <div>
            <span style={{ fontWeight: '600' }}>Calories: </span>
            <span>{calories}</span>
          </div>
          <div>
            <span style={{ fontWeight: '600' }}>Servings: </span>
            <span>{servings}</span>
          </div>
          <div>
            <span style={{ fontWeight: '600' }}>Total Calories: </span>
            <span>{calories * servings}</span>
            <span style={{ fontWeight: '600' }}> kCal</span>
          </div>
        </div>
        <Button onClick={deleteFoodBox(name)}>Delete</Button>
      </Space>
    </Card>
  );
}

function App() {
  const [foods, setFoods] = useState(foodsData);
  return (
    <div className="App">
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
