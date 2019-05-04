import React from 'react';

export const CustomNumberInput = ({
  children,
  value,
  name,
  min = 0,
  onChange,
  required = false
}) => (
  <div>
    {children}
    <input
      type="number"
      value={value}
      name={name}
      min={min}
      onChange={onChange}
      required={required}
    />
  </div>
);

export const TitleInput = ({ onChange, value = '' }) => {
  return (
    <div>
      Název
      <input type="text" value={value} name={'title'} onChange={onChange} />
    </div>
  );
};
