import React from 'react';
// import axios from 'axios';

const INITIAL_STATE = {
  diagnosis: '',
  minBonus: '',
  maxMalus: '',
  maxPrice: '',
  customFields: []
};

class TemplateAddForm extends React.Component {
  state = { ...INITIAL_STATE };

  handleSubmit = () => {
    // axios.get();
  };

  handleChange = event => {
    event.preventDefault();
    console.log(event.target.name, event.target.value);

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAddCustomField = () => {
    console.log();
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

          <input
            onChange={this.handleChange}
            name="minBonus"
            placeholder="minBonus"
            type="number"
            value={this.state.minBonus}
          />

          <input
            onChange={this.handleChange}
            name="maxMalus"
            placeholder="maxMalus"
            type="number"
            value={this.state.maxMalus}
          />

          <input
            onChange={this.handleChange}
            name="maxPrice"
            placeholder="maxPrice"
            type="number"
            value={this.state.maxPrice}
          />
        </form>

        <AddCustomFieldForm />
      </>
    );
  }
}

const AddCustomFieldForm = () => {
  return null;
};

export default TemplateAddForm;
