import React, { useContext } from "react";
import { Form, InputNumber } from "antd";
import FormContext from "../../../context";

import "./helpers.less";

// Decide trough props whether it got data or not

const CustomNumberInput = ({ id, name, children, hasData }) => {
  const { getFieldDecorator } = useContext(FormContext);

  return (
    <Form.Item label={children} required={true}>
      {getFieldDecorator(id ? `${id}.${name}` : name, {
        trigger: "onBlur",
        // ...(hasData && {initialValue: "", valuePropName: "defaultValue"}),
        // initialValue: null,
        valuePropName: "defaultValue",
        rules: [
          // no idea why it still shows the message
          // { type: "number", message: "Vyplňte prosím číslo." },
          {
            required: true,
            message: "Vyplňte prosím toto pole!"
          }
        ]
      })(<InputNumber min={0} />)}
    </Form.Item>
  );
};

export default CustomNumberInput;
