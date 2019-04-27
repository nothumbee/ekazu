import React, { useState } from 'react';
import { Button } from 'antd';

export const ItemsInput = ({ onChange, data = {} }) => {
  const [itemsGroup, setItemsGroup] = useState({ item1: '' });

  const [items, setItems] = useState([1]);
  const [count, setCount] = useState(1);

  const handleAddItem = event => {
    event.preventDefault();

    const newCount = count + 1;
    setCount(newCount);

    setItems([...items, newCount]);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    const newItem = { [name]: value };

    const newItemsGroup = {
      ...itemsGroup,
      ...newItem
    };
    setItemsGroup(newItemsGroup);

    onChange(newItemsGroup, 'textGroup');
  };

  return (
    <div>
      Text:
      {items.map(item => (
        <input
          type="text"
          name={`item${item}`}
          key={item}
          onChange={handleChange}
          value={data[`item${item}`]}
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