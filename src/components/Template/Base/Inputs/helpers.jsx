import React, { useContext } from "react";
import { Form, Input, Switch, InputNumber } from "antd";
import FormContext from "../../context";

import "./helpers.less";

export const CustomNumberInput = ({ id, name, children }) => {
  const { getFieldDecorator } = useContext(FormContext);

  return (
    <Form.Item label={children} required={true}>
      {getFieldDecorator(id ? `${id}.${name}` : name, {
        rules: [
          {
            required: true,
            message: "Vyplňte prosím toto pole!"
          }
        ]
      })(<InputNumber min={0} />)}
    </Form.Item>
  );
};

export const TitleInput = ({ id }) => {
  const { getFieldDecorator } = useContext(FormContext);

  return (
    <Form.Item label={"Název"} required={true}>
      {getFieldDecorator(id ? `${id}.title` : "title", {
        trigger: "onBlur",
        valuePropName: "defaultValue",
        rules: [{ required: true, message: "Vyplňtě prosím toto pole!" }]
      })(<Input />)}
    </Form.Item>
  );
};

export const IsExamCheckbox = ({ id }) => {
  const { getFieldDecorator } = useContext(FormContext);

  return (
    <Form.Item>
      <span className="label"> Považovat za skryté vyšetření:</span>
      {getFieldDecorator(`${id}.isExam`, {
        trigger: "onChange",
        valuePropName: "checked",
        initialValue: false
      })(<Switch />)}
    </Form.Item>
  );
};
