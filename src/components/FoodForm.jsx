import React, { useState } from 'react';
import { Space, Input, Form, Row, Col, Button } from 'antd';

const FoodForm = (props) => {
  const { setFoods } = { ...props };
  const [nameInput, setNameInput] = useState();
  const [pictureInput, setPictureInput] = useState();
  const [caloriesInput, setCaloriesInput] = useState();
  const [servingsInput, setServingsInput] = useState();
  const [visible, setVisible] = useState(false);
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
    <>
      {visible ? (
        <Form>
          <Space direction="vertical" size="large">
            <h2>Add Food</h2>
            <Row gutter={[10, 10]}>
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
              <Input
                onClick={submitForm}
                style={{ width: 'fit-content' }}
                type="submit"
                value="Create Food"
              />
            </Row>
            <Button onClick={() => setVisible(false)}>Hide Form</Button>
          </Space>
        </Form>
      ) : (
        <Space direction="vertical">
          <Button onClick={() => setVisible(true)}>Show Form</Button>
        </Space>
      )}
    </>
  );
};

export default FoodForm;
