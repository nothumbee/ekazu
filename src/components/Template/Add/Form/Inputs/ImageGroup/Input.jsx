import React, { useState } from 'react';
import { TitleInput } from '../helpers';
import { Button, Icon } from 'antd';

const ImageGroupInput = ({ onChange, data = {} }) => {
  const [items, setItems] = useState([1]);
  const [count, setCount] = useState(1);
  const [images, setImages] = useState([]);

  const handleAddItem = event => {
    event.preventDefault();
    const newCount = count + 1;
    setCount(newCount);
    setItems([...items, newCount]);
  };

  const handleChange = event => {
    const { name, value, type } = event.target;

    if (type === 'file') {
      const newImage = { [name]: value };
      setImages([...images, newImage]);
      onChange({ images: { ...images } }, 'imageGroup');
      console.log('NEW U+IMAGE', newImage);
    } else {
      const newItem = { [name]: value };
      onChange(newItem, 'imageGroup');
    }
  };

  return (
    <div>
      <b>Přidat fotky:</b> <br />
      <TitleInput onChange={handleChange} value={data.title} />
      {items.map(item => (
        <React.Fragment key={item}>
          Fotografie{' '}
          <input
            value={data.images ? data.images[`image${item}`] : ''}
            type="file"
            name={`image${item}`}
            key={item}
            onChange={handleChange}
          />
          <br />
        </React.Fragment>
      ))}
      <Button
        type="primary"
        onClick={event => {
          handleAddItem(event);
        }}
      >
        <Icon type="plus" />
        Přidat další fotografii
      </Button>
    </div>
  );
};

export default ImageGroupInput;
