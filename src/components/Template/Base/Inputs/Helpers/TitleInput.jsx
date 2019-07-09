import React, { useContext } from "react";
import { Form, Input } from "antd";
import FormContext from "../../../context";

import "./helpers.less";

const TitleInput = ({ id }) => {
  const { getFieldDecorator } = useContext(FormContext);

  return (
    // chamche to input item
    <Input.Group>
      <Form.Item label={"Název"} required={true}>
        {getFieldDecorator(id ? `${id}.title` : "title", {
          trigger: "onBlur",
          valuePropName: "defaultValue",
          rules: [{ required: true, message: "Vyplňtě prosím toto pole!" }]
        })(<Input />)}
      </Form.Item>
    </Input.Group>
  );
};

export default TitleInput;
