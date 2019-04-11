import React, { useState } from 'react';
// import axios from 'axios';

const INITIAL_STATE = {
  diagnosis: '',
  minBonus: '',
  maxMalus: '',
  maxPrice: '',
  customFields: []
};

const DEFAULT_INPUTS = [
  {
    name: 'exam',
    title: 'Vyšetření',
    type: 'exam',
    values: ['title', 'show', 'malus', 'price', 'bonus', 'items']
  },
  {
    name: 'range',
    title: 'Rozmezí',
    type: 'range',
    values: ['min', 'max']
  },
  { name: 'text', title: 'Text', type: 'text' },
  { name: 'show', title: 'Ukázat?', type: 'boolean' },
  { name: 'malus', title: 'Malus', type: 'number' },
  { name: 'price', title: 'Cena', type: 'number' },
  { name: 'min', title: 'Minimum', type: 'number' },
  { name: 'max', title: 'Maximum', type: 'number' },
  { name: 'items', title: 'Položky', type: 'array' },
  { name: 'title', title: 'Nazev', type: 'text' },
  { name: 'name', title: 'Nazev souboru', type: 'text' },
  {
    name: 'imageGroup',
    title: 'Skupina Obrazky',
    type: 'array',
    items: ['title', 'images']
  },
  {
    name: 'images',
    title: 'Obrazky',
    type: 'array',
    items: ['filename', 'text']
  }
];

class TemplateAddForm extends React.Component {
  state = { ...INITIAL_STATE };

  handleSubmit = () => {
    // axios.get();
  };

  handleChange = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAddCustomField = (event, field) => {
    event.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      customFields: [...prevState.customFields, { ...field }]
    }));
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="diagnosis"
            placeholder="Diagnóza"
            type="text"
            value={this.state.diagnosis}
          />
          <br />
          <input
            onChange={this.handleChange}
            name="minBonus"
            placeholder="minBonus"
            type="number"
            value={this.state.minBonus}
          />
          <br />
          <input
            onChange={this.handleChange}
            name="maxMalus"
            placeholder="maxMalus"
            type="number"
            value={this.state.maxMalus}
          />
          <br />
          <input
            onChange={this.handleChange}
            name="maxPrice"
            placeholder="maxPrice"
            type="number"
            value={this.state.maxPrice}
          />
          <br />
          <CustomFields
            fields={this.state.customFields}
            handleChange={this.handleChange}
            state={this.state}
          />
          <input type="submit" />
        </form>
        <br />
        <br />
        <AddCustomFieldForm
          handleSubmit={this.handleAddCustomField}
          usedInputs={this.state.customFields}
        />
      </>
    );
  }
}

const AddCustomFieldForm = ({ handleSubmit, usedInputs }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  return (
    <form onSubmit={event => handleSubmit(event, { name, type })}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        onChange={e => setName(e.target.value)}
        value={name}
      />

      <SelectType
        types={filterTypeInputs(DEFAULT_INPUTS, usedInputs)}
        handleChange={setType}
        selected={type}
      />

      <input type="submit" value="Add custom field" />
    </form>
  );
};

const CustomFields = ({ fields, state, handleChange }) => {
  console.log(state);
  return fields.map((field, index) => (
    <React.Fragment key={index}>
      <input
        type="text"
        name={field.name}
        onChange={handleChange}
        value={state[field.name]}
        placeholder={field.name}
      />
      <br />
    </React.Fragment>
  ));
};

const filterTypeInputs = (inputs, usedInputs) => {
  return inputs.filter(input => {
    return !usedInputs.map(usedInput => usedInput.type).includes(input.name);
  });
};

const SelectType = ({ types, handleChange, selected }) => {
  return (
    <select
      name="type"
      onChange={e => handleChange(e.target.value)}
      value={selected}
    >
      <option value="" />
      {types.map((type, index) => (
        <option value={type.name} key={index}>
          {type.title}
        </option>
      ))}
    </select>
  );
};

const Input = ({ type }) => {
  // used to add plus btn next to input

  switch (type) {
    case 'ahoj':
      break;
    default:
      return false;
  }

  return (
    <p>
      <input type={DEFAULT_INPUTS[type].type} />
    </p>
  );
};

export default TemplateAddForm;
