import React, { useState } from 'react';
import { Button } from 'antd';

export const ItemsInput = ({ onChange, data = [''] }) => {
  const [itemsGroup, setItemsGroup] = useState(data ? data : ['']);

  const handleAddItem = event => {
    event.preventDefault();

    setItemsGroup([...itemsGroup, '']);
  };

  const handleChange = event => {
    const { name, value } = event.target;

    const newItemsGroup = [...itemsGroup];
    newItemsGroup[name] = value;

    setItemsGroup(newItemsGroup);
    onChange(newItemsGroup, 'textGroup');
  };

  return (
    <div>
      Text:
      {itemsGroup.map((item, index) => (
        <input
          type="text"
          name={index}
          key={index}
          onChange={handleChange}
          value={item}
        />
      ))}
      <Button
        icon="plus"
        type="primary"
        shape="circle"
        onClick={event => {
          handleAddItem(event);
        }}
      />
    </div>
  );
};

export default ItemsInput;
