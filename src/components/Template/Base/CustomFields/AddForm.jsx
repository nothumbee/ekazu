import React, { useState } from 'react';
import { OPTIONAL_FIELDS } from '../../../../constants/fields';

const CustomFieldAddForm = ({ handleSubmit }) => {
  const [type, setType] = useState('');
  return (
    <div className="customFieldsBar">
      <form onSubmit={event => handleSubmit(event, type)}>
        <SelectType
          types={OPTIONAL_FIELDS}
          handleChange={setType}
          selected={type}
        />
        <input type="submit" value="Přidat vlastní pole" />
      </form>
    </div>
  );
};

const SelectType = ({ types, handleChange, selected }) => {
  return (
    <select
      name="type"
      onChange={e => handleChange(e.target.value)}
      value={selected}
      required
    >
      <option value="">Vyber typ</option>
      {types.map((type, index) => (
        <option value={type.name} key={index}>
          {type.title}
        </option>
      ))}
    </select>
  );
};

export default CustomFieldAddForm;
