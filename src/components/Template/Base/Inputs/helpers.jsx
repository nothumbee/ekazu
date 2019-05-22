import React, { useContext } from 'react';

import { Form, Input, Icon, Button, Checkbox, InputNumber } from 'antd';

import FormContext from '../../context';

export const CustomNumberInput = ({ id, name, children }) => {
  const { getFieldDecorator } = useContext(FormContext);

  return (
    <Form.Item label={children} required={true}>
      {getFieldDecorator(id ? `${id}.${name}` : name, {
        trigger: 'onBlur',
        valuePropName: 'defaultValue',
        // initialValue: value,
        rules: [{ required: true, message: 'Please input your username!' }]
      })(<InputNumber />)}
    </Form.Item>
  );
};

export const TitleInput = ({ id }) => {
  const { getFieldDecorator } = useContext(FormContext);

  return (
    <Form.Item label={'Název'} required={true}>
      {getFieldDecorator(id ? `${id}.title` : 'title', {
        trigger: 'onBlur',
        valuePropName: 'defaultValue',
        rules: [{ required: true, message: 'Please input your username!' }]
      })(<Input />)}
    </Form.Item>
  );
};

export const IsExamCheckbox = ({ id }) => {
  const { getFieldDecorator } = useContext(FormContext);

  return (
    <Form.Item label={'Považovat za skryté vyšetření:'}>
      {getFieldDecorator(`${id}.isExam`, {
        trigger: 'onChange',
        valuePropName: 'checked',
        initialValue: false
        // valuePropName: 'defaultValue',
        // omChange: props.onChange,
        // rules: [{ message: 'Please input your username!' }]
      })(<Checkbox />)}
    </Form.Item>
  );
};
