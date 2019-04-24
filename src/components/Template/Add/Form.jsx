/* TADY BUDE STACIT JEDEN FORMULAR SE VSEMI MOZNOSTMI - atribut exam znamena, 
ze bude zprvu schovany, takze neni treba delit na tri typy pri nacteni,
 ale pri odeslani je to fajn pro lepsi UX */

import React from 'react';
import { REQUIRED_FIELDS } from '../../../constants/fields';
import CustomInputBase from './FormAtoms';
import AddCustomFieldForm from './Form/AddCustomFieldForm';
import SelectDiagnosis from './Form/Selects/Diagnosis';

const INITIAL_STATE = {
  diagnosis: '',
  minBonus: '',
  maxMalus: '',
  maxPrice: '',
  exams: {
    data: {}
  },
  ranges: { data: {} },
  symptoms: { data: {} },
  customFields: { exams: [], ranges: [], symptoms: [] }
};

// there is a sligh t issue with backing up form to localstorage, because values are not binded with state
// data saves to state, but not the other way

// validation is missing
// and also imageGroup needs to be refactored because single image description is missing
class TemplateAddForm extends React.Component {
  state = { ...INITIAL_STATE };

  handleSubmit = event => {
    // event.preventDefault();
    // axios.post();

    const {
      ranges,
      exams,
      symptoms,
      diagnosis,
      minBonus,
      maxMalus,
      maxPrice
    } = this.state;

    const rRanges = Object.values(ranges.data);

    const rSymptoms = Object.values(symptoms.data).map(
      ({ title, textGroup }) => ({
        title: title,
        text: Object.values(textGroup || {})
      })
    );

    const rExams = Object.values(exams.data).map(exam => ({
      title: exam.title,
      exam: true,
      show: exam.show,
      price: exam.price,
      malus: exam.malus,
      bonus: exam.bonus,
      text: Object.values(exam.textGroup || {}),
      imageGroup: [
        {
          // error undefined
          title: exam.imageGroup ? exam.imageGroup.title : '',
          images: exam.imageGroup ? Object.values(exam.imageGroup.images) : []
        }
      ]
    }));

    const template = {
      diagnosis,
      minBonus,
      maxMalus,
      maxPrice,
      generators: [...rExams, ...rRanges, ...rSymptoms] // contains only self-contained objects
    };
    console.log('template', template);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleChangeCustomField = (id, newItem, type) => {
    // contains pretty WET code, DRY it , wackily erasable turf
    console.log('newITem', newItem);
    console.log('newITem ID', id, type);

    console.log('REF', type);
    this.setState(
      prevState => ({
        ...prevState,
        [type]: {
          ...prevState[type],
          data: { ...prevState[type].data, [id]: newItem }
        }
      }),
      this.handleSubmit
    );
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  handleAddCustomField = (event, type) => {
    event.preventDefault();

    if (type !== '')
      this.setState(prevState => ({
        ...prevState,
        customFields: {
          ...prevState.customFields,
          [type]: [
            ...prevState.customFields[type],
            prevState.customFields[type].length
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
          Diagnosis <SelectDiagnosis />
          <br />
          <RequiredFields onChange={this.handleChange} />
          <CustomFields
            fields={this.state.customFields}
            handleChange={this.handleChangeCustomField}
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
  // first convert fields
  return Object.keys(fields).map(fieldType =>
    fields[fieldType].map(fieldId => (
      <React.Fragment key={fieldId}>
        <CustomInputBase
          id={fieldId}
          type={fieldType}
          onChange={handleChange}
          // value={state[field.name]}
          // placeholder={field.name}
        />
        <br />
      </React.Fragment>
    ))
  );
};

export default TemplateAddForm;
