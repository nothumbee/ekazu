import React, { useState } from 'react';
import { TitleInput, MinInput, MaxInput } from './helpers';

const RangeInput = ({ onChange, id }) => {
  const [range, setRange] = useState({});
  // input onchange -> store the value in higher component > send to parent comp
  const handleChange = event => {
    const { name, value } = event.target;
    const newRange = { ...range, [name]: value };

    setRange(newRange);
    onChange(id, newRange, 'range');
    // and send to onChange handler with id of group and save to state
  };

  return (
    <div>
      <h3>Add Range</h3>
      <TitleInput onChange={handleChange} />
      <MinInput onChange={handleChange} />
      <MaxInput onChange={handleChange} />
    </div>
  );
};

export default RangeInput;
