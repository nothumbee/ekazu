import React, { useState } from 'react';
import { REQUIRED_FIELDS, OPTIONAL_FIELDS } from '../../../constants/fields';
import { ShowInput, ExamInput } from './FormAtoms';
// import axios from 'axios';

// const AddImagesForm = () => {};
// const AddExamForm = () => {};
// const AddRangeForm = () => {};

// const BaseForm = props => {
//   return (
//     <form>
//       <input type="submit" />
//     </form>
//   );
// };

const INITIAL_STATE = {
  diagnosis: '',
  minBonus: '',
  maxMalus: '',
  maxPrice: '',
  customFields: []
};

class TemplateAddForm extends React.Component {
  state = { ...INITIAL_STATE };

  handleSubmit = event => {
    // axios.get();
    event.preventDefault();
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
        <h1>Add Template Form</h1>
        <form onSubmit={this.handleSubmit}>
          {REQUIRED_FIELDS.map((field, index) => (
            <React.Fragment key={index}>
              <input
                onChange={this.handleChange}
                name={field.name}
                type={field.type}
                value={this.state[field.name]}
                placeholder={field.title}
              />
              <br />
            </React.Fragment>
          ))}

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
        <ExamInput />
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
        placeholder="Title"
        onChange={e => setName(e.target.value)}
        value={name}
      />

      <SelectType
        types={filterTypeInputs(OPTIONAL_FIELDS, usedInputs)}
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
        name={field.type}
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

// const Input = ({ type }) => {
//   // used to add plus btn next to input

//   switch (type) {
//     case 'ahoj':
//       return null;
//       break;
//     default:
//       return null;
//   }

//   return (
//     <p>
//       <input type={OPTIONAL_FIELDS[type].type} />
//     </p>
//   );
// };

export default TemplateAddForm;
