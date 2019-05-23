import React, { useEffect } from 'react';
import { Typography, Card, Form, Button } from 'antd';

import DiagnosisSelect from './Selects/Diagnosis/Select';
import RequiredFields from './RequiredFields/RequiredFields';
import './Form.less';

import { TitleInput } from './Inputs/helpers';
import CustomFields from './CustomFields/CustomFields';
import FormContext from '../context';

const { Title } = Typography;

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
  componentDidMount() {
    setTimeout(() => {
      this.setVals();
    }, 2000);
  }

  setVals = () => {
    console.log('this.props.data', this.props.data);

    if (this.props.data) {
      const { count, symptoms, ranges, exams, ...rest } = this.props.data;

      const filterIds = arr => arr.map(({ id, text, ...rest }) => rest);
      const onlyText = arr => arr.map(({ text }) => ({ text }));

      this.props.form.setFieldsValue({
        ...rest,
        symptoms: filterIds(symptoms),
        ranges: filterIds(ranges),
        exams: filterIds(exams)
      });

      setTimeout(() => {
        this.props.form.setFieldsValue({
          symptoms: onlyText(symptoms),
          ranges: onlyText(ranges),
          exams: onlyText(exams)
        });
      }, 500);
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    const values = this.props.form.getFieldsValue();
    console.log('values', values);
  };

  render() {
    const {
      form,
      data: { count }
    } = this.props;
    return (
      <Card>
        <Title level={2}>Přidání šablony</Title>
        <FormContext.Provider value={form}>
          <Form onSubmit={this.handleSubmit}>
            {form.getFieldDecorator('uid', { initialValue: '' })}
            <TitleInput />
            <DiagnosisSelect />
            <RequiredFields />
            <CustomFields count={count} />
            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
              <Button type="primary" htmlType="submit">
                Přidej šablonu
              </Button>
            </Form.Item>
          </Form>
        </FormContext.Provider>
      </Card>
    );
  }
}

export default Form.create({ name: 'template_base_form' })(TemplateBaseForm);
