import React from 'react';
import { Affix, Typography, Card } from 'antd';

import SelectDiagnosis from './Selects/Diagnosis/Select';
import CustomFields from './CustomFields/CustomFields';
import RequiredFields from './RequiredFields/RequiredFields';
import CustomFieldAddForm from './CustomFields/AddForm';
import './Form.css';

const { Title } = Typography;

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

// validation is missing
// data is now binded with state, but needs to be saved to localStorage
// and also imageGroup needs to be refactored because single image description is missing
class TemplateAddFormBase extends React.Component {
  state = this.props.data ? { ...this.props.data } : { ...INITIAL_STATE };

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
    this.setState(prevState => ({
      // ...prevState,
      [type]: {
        ...prevState[type],
        data: { ...prevState[type].data, [id]: newItem }
      }
    }));
  };

  handleAddCustomField = (event, type) => {
    event.preventDefault();

    if (type !== '') {
      this.setState(prevState => ({
        // ...prevState,
        customFields: {
          ...prevState.customFields,
          [type]: [
            ...prevState.customFields[type],
            prevState.customFields[type].length
          ]
        }
      }));

      this.handleAddCustomFieldDefaultData(type);
    }
  };

  handleAddCustomFieldDefaultData = type => {
    const defaultData = () => {
      switch (type) {
        case 'exams':
          return {
            title: '',
            exam: true,
            price: '',
            malus: '',
            bonus: '',
            textGroup: {},
            imageGroup: {
              title: '',
              images: {}
            }
          };
        case 'ranges':
          return {
            min: '',
            max: '',
            title: ''
          };
        case 'symptoms':
          return {
            title: '',
            textGroup: {}
          };

        default:
          return null;
      }
    };

    this.setState(prevState => ({
      [type]: {
        ...prevState[type],
        data: {
          ...prevState[type].data,
          [prevState.customFields[type].length - 1]: defaultData()
        }
      }
    }));
  };

  render() {
    const {
      diagnosis,
      maxMalus,
      maxPrice,
      minBonus,
      exams,
      symptoms,
      ranges
    } = this.state;

    const requiredFieldsData = { maxMalus, maxPrice, minBonus };

    const customFieldsData = {
      exams: exams.data,
      symptoms: symptoms.data,
      ranges: ranges.data
    };

    return (
      <>
        <Title level={2}>Přidání šablony</Title>

        <Affix offsetTop={0}>
          <CustomFieldAddForm
            handleSubmit={this.handleAddCustomField}
            usedInputs={this.state.customFields}
          />
        </Affix>

        <Card>
          <h2>Šablona</h2>

          <form onSubmit={this.handleSubmit}>
            <SelectDiagnosis diagnosis={diagnosis} />
            <RequiredFields
              onChange={this.handleChange}
              data={requiredFieldsData}
            />
            <CustomFields
              data={customFieldsData}
              fields={this.state.customFields}
              handleChange={this.handleChangeCustomField}
            />
            <input type="submit" value="Přidat template" />
          </form>
        </Card>
      </>
    );
  }
}

export default TemplateAddFormBase;