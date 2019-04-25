import React, { useState } from "react";

export const ItemsInput = ({ onChange }) => {
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
    onChange({ [name]: value }, "textGroup");
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
        onClick={event => {
          handleAddItem(event);
        }}
      >
        +
      </button>
    </div>
  );
};

export const ShowInput = ({ onChange }) => {
  return (
    <div>
      Zobrazit
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
      Cena <input type="number" name="price" onChange={onChange} />
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
      Minimum <input type="number" name="min" onChange={onChange} />
    </div>
  );
};

export const MaxInput = ({ onChange }) => {
  return (
    <div>
      Maximum <input type="number" name="max" onChange={onChange} />
    </div>
  );
};

export const TitleInput = ({ onChange, value }) => {
  return (
    <div>
      Název
      <input type="text" value={value} name={"title"} onChange={onChange} />
    </div>
  );
};
