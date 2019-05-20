import React from 'react';
import { Affix, Typography, Card, Form } from 'antd';

import DiagnosisSelect from './Selects/Diagnosis/Select';
import RequiredFields from './RequiredFields/RequiredFields';
import './Form.less';
import CustomFieldAddForm from './CustomFields/AddForm';
import CustomInputBase from './CustomFields/CustomInputBase';

import FormContext from '../context';

const { Title } = Typography;

const defaultItem = {
  bonus: null,
  exam: null,
  imageGroup: null,
  malus: null,
  max: null,
  min: null,
  price: null,
  text: null,
  title: null
};

class TemplateBaseForm extends React.Component {
  state = {};

  componentDidMount() {
    console.log('this.props.data', this.props.data);
    this.setState({ ...this.props.data });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('FORMSTATE', this.state);
  }

  handleSubmit = event => {
    event.preventDefault();

    const { diagnosis, requiredFieldsData, generators } = this.state;

    // need to remove type property from each generator if exists
    const generatorsWithoutTypes = generators.map(generator => {
      const { type, ...generatorWithoutType } = generator;
      return generatorWithoutType;
    });

    const template = {
      diagnosis: diagnosis,
      ...requiredFieldsData,
      generators: generatorsWithoutTypes
    };

    this.props.handleSubmit(template);
  };

  handleChange = event => {
    const name = event.target.name;
    const newItem = { [name]: event.target.value };
    if (name === 'diagnosis') {
      this.setState(prevState => ({
        ...prevState,
        ...newItem
      }));
    } else
      this.setState(prevState => ({
        ...prevState,
        requiredFieldsData: { ...prevState.requiredFieldsData, ...newItem }
      }));
  };

  handleChangeCustomField = (id, newItem, type) => {
    const newGenerators = [...this.state.generators];
    newGenerators[id] = { ...newGenerators[id], ...newItem };
    this.setState(prevState => ({
      ...prevState,
      generators: newGenerators
    }));
  };

  handleAddCustomField = (event, type) => {
    event.preventDefault();

    if (type !== '') {
      this.setState(prevState => ({
        ...prevState,
        generators: [...prevState.generators, { ...defaultItem, type: type }]
      }));
    }
  };

  render() {
    const { diagnosis, generators, requiredFieldsData } = this.state;
    const Formik = props => {
      const handleSubmit = event => {
        event.preventDefault();

        const values = props.form.getFieldsValue();
        console.log('values', values);
      };
      const { getFieldDecorator } = props.form;
      const form = props.form;

      return (
        <FormContext.Provider value={form}>
          <Form onSubmit={handleSubmit}>
            <DiagnosisSelect
            // diagnosis={diagnosis}
            // handleChange={this.handleChange}
            />
            <RequiredFields
              onChange={this.handleChange}
              data={requiredFieldsData}
            />
            <CustomFields
              data={generators}
              // fields={this.state.customFields}
              handleChange={this.handleChangeCustomField}
            />
            <input type="submit" value="Přidat template" />
          </Form>
        </FormContext.Provider>
      );
    };
    const WrappedDynamicFieldSet = Form.create({ name: 'dynamic_form_item' })(
      Formik
    );
    return (
      <>
        <Title level={2}>Přidání šablony</Title>

        <Affix offsetTop={64}>
          <CustomFieldAddForm handleSubmit={this.handleAddCustomField} />
        </Affix>

        <Card>
          <Title level={2}>Šablona</Title>

          <WrappedDynamicFieldSet />
        </Card>
      </>
    );
  }
}

const CustomFields = ({ handleChange, data = [], getFieldDecorator }) => {
  return data.map((field, index) => {
    let fieldType;

    if (field.type) {
      fieldType = field.type;
    } else if (field.min && field.max) {
      fieldType = 'ranges';
    } else if (field.imageGroup) {
      fieldType = 'exams';
    } else fieldType = 'symptoms';

    return (
      <React.Fragment key={index}>
        <CustomInputBase
          getFieldDecorator={getFieldDecorator}
          id={index}
          type={fieldType}
          onChange={handleChange}
          data={field}
        />
      </React.Fragment>
    );
  });
};

export default TemplateBaseForm;
