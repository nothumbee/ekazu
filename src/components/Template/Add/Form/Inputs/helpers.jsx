import React, { useState } from 'react';

export const ImageGroupInput = ({ onChange }) => {
  const [items, setItems] = useState([1]);
  const [count, setCount] = useState(1);

  const addItem = (items, newItem) => {
    setItems([...items, newItem]);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    onChange({ [name]: value });
  };

  return (
    <div>
      <b>Add Images:</b> <br />
      <TitleInput onChange={handleChange} />
      {items.map(item => (
        <React.Fragment key={item}>
          Image{' '}
          <input
            type="file"
            name={`image${item}`}
            key={item}
            onChange={handleChange}
          />
          <br />
        </React.Fragment>
      ))}
      <button
        onClick={() => {
          const newCount = count + 1;
          setCount(newCount);
          addItem(items, newCount);
        }}
      >
        Add Next Image
      </button>
    </div>
  );
};

export const ItemsInput = ({ onChange }) => {
  const [items, setItems] = useState([1]);
  const [count, setCount] = useState(1);

  const addItem = (items, newItem) => {
    setItems([...items, newItem]);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    onChange({ [name]: value }, 'textGroup');
  };

  return (
    <div>
      Add options:
      {items.map(item => (
        <input
          type="text"
          name={`item${item}`}
          key={item}
          onChange={handleChange}
        />
      ))}
      <button
        onClick={() => {
          const newCount = count + 1;
          setCount(newCount);
          addItem(items, newCount);
        }}
      >
        Add Item
      </button>
    </div>
  );
};

export const ShowInput = ({ onChange }) => {
  return (
    <div>
      Zobrazit{' '}
      <input type="checkbox" value="true" name="show" onChange={onChange} />
    </div>
  );
};

export const MalusInput = ({ onChange }) => {
  return (
    <div>
      Malus <input type="number" name="malus" onChange={onChange} />
    </div>
  );
};

export const PriceInput = ({ onChange }) => {
  return (
    <div>
      Price <input type="number" name="price" onChange={onChange} />
    </div>
  );
};

export const BonusInput = ({ onChange }) => {
  return (
    <div>
      Bonus <input type="number" name="bonus" onChange={onChange} />
    </div>
  );
};

export const MinInput = ({ onChange }) => {
  return (
    <div>
      Min <input type="number" name="min" onChange={onChange} />
    </div>
  );
};

export const MaxInput = ({ onChange }) => {
  return (
    <div>
      Max <input type="number" name="max" onChange={onChange} />
    </div>
  );
};

export const TitleInput = ({ onChange, value }) => {
  return (
    <div>
      Title
      <input type="text" value={value} name={'title'} onChange={onChange} />
    </div>
  );
};
