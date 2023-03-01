import React from 'react'

import { Card, Button, Space } from 'antd';

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

export default FoodBox