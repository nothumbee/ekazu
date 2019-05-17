import React, { useState } from 'react';
import { Button, Input, Form } from 'antd';

export const ItemsInput = ({ onChange, data = [''] }) => {
  const [itemsGroup, setItemsGroup] = useState(data ? data : ['']);

  const handleAddItem = event => {
    event.preventDefault();

    setItemsGroup([...itemsGroup, '']);
  };

  const removeItem = () => { };
  
  const handleChange = event => {
    const { name, value } = event.target;

    const newItemsGroup = [...itemsGroup];
    newItemsGroup[name] = value;

    setItemsGroup(newItemsGroup);
    onChange(newItemsGroup, 'textGroup');
  };

  return itemsGroup.map((item, index) => (
    <Form.Item label={'Text:'}>
      <Input />
    </Form.Item>
  ));
};

export default ItemsInput;
