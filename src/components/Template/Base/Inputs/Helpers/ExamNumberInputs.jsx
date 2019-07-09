import React from "react";
import { Row, Col } from "antd";
import CustomNumberInput from "./CustomNumberInput";

const data = {};
const examNumberInputs = [
  { name: "bonus", title: "Bonus", value: data.bonus },
  { name: "malus", title: "Malus", value: data.malus },
  { name: "price", title: "Price", value: data.price }
];

const ExamNumberInputs = ({ id }) => (
  <Row>
    {examNumberInputs.map((input, index) => (
      <Col span={8} key={index}>
        <CustomNumberInput id={id} name={input.name}>
          {input.title}
        </CustomNumberInput>
      </Col>
    ))}
  </Row>
);

export default ExamNumberInputs;
