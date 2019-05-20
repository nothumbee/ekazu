import React, { useState, useContext } from 'react';
import { Button, Input, Form } from 'antd';

import FormContext from '../../../context';

export const ItemsInput = ({ onChange, data = [''] }) => {
  const context = useContext(FormContext);

  const { getFieldDecorator, getFieldValue } = context;

  const [itemsGroup, setItemsGroup] = useState(data ? data : ['']);

  const handleAddItem = event => {
    event.preventDefault();

    setItemsGroup([...itemsGroup, '']);
  };

  const removeItem = () => {};

  const handleChange = event => {
    const { name, value } = event.target;

    const newItemsGroup = [...itemsGroup];
    newItemsGroup[name] = value;

    setItemsGroup(newItemsGroup);
    onChange(newItemsGroup, 'textGroup');
  };

  getFieldDecorator('keys', { initialValue: [] });
  const keys = getFieldValue('keys');

  return keys.map((item, index) => (
    <Form.Item label={'Text:'}>
      <Input />
    </Form.Item>
  ));
};

export default ItemsInput;
