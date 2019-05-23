import React, { useContext, useRef } from 'react';
import { Affix, Typography, Card, Form, Button, Icon, Collapse } from 'antd';

import DiagnosisSelect from './Selects/Diagnosis/Select';
import RequiredFields from './RequiredFields/RequiredFields';
import './Form.less';
import CustomFieldAddForm from './CustomFields/AddForm';
import CustomInputBase from './CustomFields/CustomInputBase';

import FormContext from '../context';
import { TitleInput } from './Inputs/helpers';

const { Title } = Typography;
const Panel = Collapse.Panel;

// const defaultItem = {
//   bonus: null,
//   exam: null,
//   imageGroup: null,
//   malus: null,
//   max: null,
//   min: null,
//   price: null,
//   text: null,
//   title: null
// };

class TemplateBaseForm extends React.Component {
  // state = {};

  // componentDidMount() {
  //   console.log('this.props.data', this.props.data);
  //   this.setState({ ...this.props.data });
  // }

  // handleSubmit = event => {
  //   event.preventDefault();

  //   const { diagnosis, requiredFieldsData, generators } = this.state;

  //   // need to remove type property from each generator if exists
  //   const generatorsWithoutTypes = generators.map(generator => {
  //     const { type, ...generatorWithoutType } = generator;
  //     return generatorWithoutType;
  //   });

  //   const template = {
  //     diagnosis: diagnosis,
  //     ...requiredFieldsData,
  //     generators: generatorsWithoutTypes
  //   };

  //   this.props.handleSubmit(template);
  // };

  // handleAddCustomField = (event, type) => {
  //   event.preventDefault();

  //   if (type !== '') {
  //     this.setState(prevState => ({
  //       ...prevState,
  //       generators: [...prevState.generators, { ...defaultItem, type: type }]
  //     }));
  //   }
  // };

  render() {
    // const { generators, requiredFieldsData } = this.state;
    const Formik = props => {
      const handleSubmit = event => {
        event.preventDefault();

        const values = props.form.getFieldsValue();
        console.log('values', values);
      };
      const form = props.form;

      return (
        <FormContext.Provider value={form}>
          <Form onSubmit={handleSubmit}>
            <TitleInput />

            <DiagnosisSelect />
            <RequiredFields />
            <CustomFields />
            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
              <Button type="primary" htmlType="submit">
                Přidej šablonu
              </Button>
            </Form.Item>
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

        <Card>
          <WrappedDynamicFieldSet />
        </Card>
      </>
    );
  }
}

const CustomFields = () => {
  const context = useContext(FormContext);
  const id = useRef(0);
  console.log('id.current :', id.current);

  const { getFieldDecorator, getFieldValue, setFieldsValue } = context;

  const handleAddField = (event, type) => {
    const fields = getFieldValue('fields');
    const nextFields = fields.concat({ id: id.current++, type });

    setFieldsValue({
      fields: nextFields
    });
  };

  const handleRemoveItem = item => {
    const fields = getFieldValue('fields');

    setFieldsValue({
      fields: fields.filter(({ id }) => id !== item.id)
    });
  };

  getFieldDecorator('fields', { initialValue: [] });
  const fields = getFieldValue('fields');

  const header = type =>
    ({
      exams: 'exams',
      ranges: 'ranges',
      symptoms: 'symptoms'
    }[type]);

  return (
    <div>
      <Affix offsetTop={64}>
        <CustomFieldAddForm handleSubmit={handleAddField} />
      </Affix>

      <Collapse>
        {fields.map((field, index) => (
          <Panel key={index} header={header(field.type)}>
            <CustomInputBase
              id={`${field.type}[${field.id}]`}
              type={field.type}
              deleteButton={
                <Icon
                  className="dynamic-delete-button"
                  type="minus-circle-o"
                  onClick={() => handleRemoveItem(field)}
                />
              }
            />
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default TemplateBaseForm;
