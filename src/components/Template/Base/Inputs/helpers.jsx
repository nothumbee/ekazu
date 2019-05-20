import React, { useContext } from 'react';

import { Form, Input, Icon, Button, Checkbox, InputNumber } from 'antd';

import FormContext from '../../context';

export const CustomNumberInput = ({ children, name, value }) => {
  const { getFieldDecorator } = useContext(FormContext);

  return (
    <Form.Item label={children} required={true}>
      {getFieldDecorator(name, {
        // trigger: 'onBlur',
        // valuePropName: 'defaultValue',
        // initialValue: value,
        rules: [{ required: true, message: 'Please input your username!' }]
      })(<InputNumber />)}
    </Form.Item>
  );
};

export const TitleInput = props => {
  const { getFieldDecorator } = useContext(FormContext);

  return (
    <Form.Item label={'Název'} required={true}>
      {getFieldDecorator('title', {
        // trigger: 'onBlur',
        rules: [{ required: true, message: 'Please input your username!' }]
      })(<Input />)}
    </Form.Item>
  );
};

export const IsExamCheckbox = props => {
  const { getFieldDecorator } = useContext(FormContext);

  return (
    <Form.Item label={'Považovat za skryté vyšetření:'}>
      {getFieldDecorator('isExam', {
        // trigger: 'onBlur',
        rules: [{ message: 'Please input your username!' }]
      })(<Checkbox />)}
    </Form.Item>
  );
};
