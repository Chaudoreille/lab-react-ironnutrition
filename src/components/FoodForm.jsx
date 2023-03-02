import React, { useRef, useState } from 'react';
import { Space, Input, Form, Row, Col, Button, Card } from 'antd';

const FoodForm = (props) => {
  const { setFoods } = { ...props };

  const [visible, setVisible] = useState(true);
  const [nameInput, setNameInput] = useState();
  const [pictureInput, setPictureInput] = useState();
  const [caloriesInput, setCaloriesInput] = useState();
  const [servingsInput, setServingsInput] = useState();

  const handleNameInput = (e) => setNameInput(e.currentTarget.value);
  const handlePictureInput = (e) => setPictureInput(e.currentTarget.value);
  const handleCaloriesInput = (e) => setCaloriesInput(e.currentTarget.value);
  const handleServingsInput = (e) => setServingsInput(e.currentTarget.value);
  const submitForm = () => {
    const newFoodItem = {
      name: nameInput,
      image: pictureInput,
      calories: caloriesInput,
      servings: servingsInput,
    };
    setFoods((foods) => [...foods, newFoodItem]);
  };

  return (
    <Card
      title={visible ? 'Add Food' : ''}
      style={
        visible
          ? { width: '400px', height: '320px', overflow: 'hidden' }
          : { width: '140px', height: '57px', overflow: 'hidden' }
      }
      className="animate"
      extra={
        <Button onClick={() => setVisible((v) => !v)}>
          {visible ? 'Hide' : 'Add Food'}
        </Button>
      }
    >
      <Form>
        <Space direction="vertical" size="large">
          <Row gutter={[10, 10]} justify="center">
            <Col>
              <Input
                addonBefore="Name"
                name="name"
                type="text"
                onChange={handleNameInput}
              />
            </Col>
            <Col>
              <Input
                addonBefore="Image"
                name="picture"
                type="url"
                onChange={handlePictureInput}
              />
            </Col>
            <Col>
              <Input
                addonBefore="Calories"
                name="calories"
                type="number"
                onChange={handleCaloriesInput}
              />
            </Col>
            <Col>
              <Input
                addonBefore="Servings"
                name="servings"
                type="number"
                onChange={handleServingsInput}
              />
            </Col>
          </Row>
          <Row justify="center">
            <Button
              type="primary"
              onClick={submitForm}
              style={{ width: 'fit-content' }}
            >
              Create Food
            </Button>
          </Row>
        </Space>
      </Form>
    </Card>
  );
};

export default FoodForm;
