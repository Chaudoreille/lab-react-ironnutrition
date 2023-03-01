import React from 'react'
import { Space, Input, Form, Row, Col } from 'antd'

const FoodForm = (props) => {
    // const { setFoods } = {...props};
    const formStyle = {
        marginBottom: "2rem",   
    };

    return (
        <Form style={formStyle}>
            <Space direction='vertical' size="large">
                <h2>Add Food</h2>
                <Row gutter={[10, 10]}>
                    <Col>
                        <Input addonBefore="Name" name='name' type='text'></Input>
                    </Col>
                    <Col>
                        <Input addonBefore="Image" name='picture' type='url'></Input>
                    </Col>
                    <Col>
                        <Input addonBefore="Calories" name='calories' type='number'></Input>
                    </Col>
                    <Col>
                        <Input addonBefore="Servings" name='servings' type='number'></Input>
                    </Col>
                </Row>
                <Row justify="center">
                    <Input style={{width: "fit-content"}} type='submit' value="Create Food" />
                </Row>
            </Space>
        </Form>
    )
}

export default FoodForm