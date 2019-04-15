import React from 'react';
import { REQUIRED_FIELDS } from '../../../constants/fields';
import CustomInputBase from './FormAtoms';
import AddCustomFieldForm from './Form/AddCustomFieldForm';

const INITIAL_STATE = {
  diagnosis: '',
  minBonus: '',
  maxMalus: '',
  maxPrice: '',
  exams: {
    count: [],
    data: [
      {
        title: 'CT Hrudníku',
        exam: true,
        show: false,
        malus: 10,
        price: 15000,
        text: ['Bez nálezu', 'Malé těleso'],
        imageGroup: [
          {
            title: 'RTG horního břicha',
            images: [
              {
                filename: 'nativ01.jpg',
                text: ''
              },
              {
                filename: 'nativ02.jpg',
                text: ''
              }
            ]
          }
        ]
      }
    ]
  },
  ranges: { count: [], data: [{ title: '', min: 0, max: 10 }] },
  symptoms: { count: [], data: [{ title: '', text: [] }] },
  customFields: []
};

// there is a slight issue with backing up form to localstorage, because values are not binded with state
// data saves to state, but not the other way

// validation is missing
// and also imageGroup needs to be refactored because single image description is missing
class TemplateAddForm extends React.Component {
  state = { ...INITIAL_STATE };

  handleSubmit = event => {
    event.preventDefault();
    // axios.get();

    const { ranges, exams, symptoms } = this.state;

    const rRanges = Object.values(ranges.data);
    // const rExams = { Object.values(exams.data) }

    const template = {
      generators: [...Object.values(ranges.data)]
    };
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleChangeCustomField = (id, newItem, type) => {
    // contains pretty WET code, DRY it , wackily erasable turf
    console.log('newITem', newItem);

    const typeRef = `${type}s`;
    this.setState(prevState => ({
      ...prevState,
      [typeRef]: {
        ...prevState[typeRef],
        data: { ...prevState[typeRef].data, [id]: { ...newItem } }
      }
    }));
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  handleAddCustomField = (event, type) => {
    event.preventDefault();
    // refactor and DRY it
    const typeRef = `${type}s`;

    this.setState(prevState => ({
      ...prevState,
      customFields: [...prevState.customFields, { type }],
      [typeRef]: {
        ...prevState[typeRef],
        count: [
          ...prevState[typeRef].count,
          prevState[typeRef].count.length + 1
        ]
      }
    }));
  };

  render() {
    return (
      <>
        <h1>Add Template Form</h1>
        <AddCustomFieldForm
          handleSubmit={this.handleAddCustomField}
          usedInputs={this.state.customFields}
        />
        <form onSubmit={this.handleSubmit}>
          <RequiredFields onChange={this.handleChange} />

          <CustomFields
            fields={this.state.customFields}
            handleChange={this.handleChangeCustomField}
            // state={this.state}
          />
          <input type="submit" />
        </form>
        <br />
        <br />
      </>
    );
  }
}

const RequiredFields = ({ onChange }) => {
  return REQUIRED_FIELDS.map((field, index) => (
    <React.Fragment key={index}>
      <input
        onChange={onChange}
        name={field.name}
        type={field.type}
        // value={this.state[field.name]}
        placeholder={field.title}
      />
      <br />
    </React.Fragment>
  ));
};

const CustomFields = ({ fields, handleChange }) => {
  return fields.map((field, index) => (
    <React.Fragment key={index}>
      <CustomInputBase
        id={index}
        field={field}
        onChange={handleChange}
        // value={state[field.name]}
        placeholder={field.name}
      />
      <br />
    </React.Fragment>
  ));
};

export default TemplateAddForm;
