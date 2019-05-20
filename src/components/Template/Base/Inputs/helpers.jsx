import React, { useContext } from 'react';

import { Form, Input, Icon, Button, Checkbox, InputNumber } from 'antd';

import FormContext from '../../context';

export const CustomNumberInput = ({ children, name, value }) => {
  const { getFieldDecorator } = useContext(FormContext);

  return (
    <Form.Item label={children} required={true}>
      {/* <InputNumber /> */}
      {getFieldDecorator(name, {
        // trigger: 'onBlur',
        // valuePropName: 'defaultValue',
        // initialValue: user.lastName,
        rules: [{ required: true, message: 'Please input your username!' }]
      })(<InputNumber />)}
      ;
    </Form.Item>
  );
};

export const TitleInput = props => {
  return (
    <Form.Item label={'Název'} required={true}>
      <FormContext.Consumer>
        {({ getFieldDecorator }) => {
          return getFieldDecorator('title', {
            // trigger: 'onBlur',
            rules: [{ required: true, message: 'Please input your username!' }]
          })(<Input />);
        }}
      </FormContext.Consumer>
    </Form.Item>
  );
};

export const IsExamCheckbox = props => {
  return (
    <Form.Item label={'Považovat za skryté vyšetření:'}>
      <FormContext.Consumer>
        {({ getFieldDecorator }) => {
          return getFieldDecorator('isExam', {
            trigger: 'onBlur',
            rules: [{ message: 'Please input your username!' }]
          })(<Checkbox />);
        }}
      </FormContext.Consumer>
    </Form.Item>
  );
};
