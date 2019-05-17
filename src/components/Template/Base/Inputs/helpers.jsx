import React from 'react';

import { Form, Input, Icon, Button, Checkbox, InputNumber } from 'antd';

export const CustomNumberInput = ({ children }) => (
  <Form.Item label={children} required={true}>
    <InputNumber />
  </Form.Item>
);

export const TitleInput = () => {
  return (
    <Form.Item label={'Název'} required={true}>
      <Input />
    </Form.Item>
  );
};

export const IsExamCheckbox = () => {
  return (
    <Form.Item label={'Považovat za skryté vyšetření:'}>
      <Checkbox />
    </Form.Item>
  );
};
