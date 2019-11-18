import React, { useEffect, useState, useMemo } from 'react';
import {
  Typography, Card, Form, Button,
} from 'antd';

import DiagnosisSelect from '../Selects/Diagnosis/Select';
import RequiredFields from '../RequiredFields/RequiredFields';
import './Form.less';

import TitleInput from '../Inputs/Helpers/TitleInput';
import CustomFields from '../CustomFields/CustomFields';
import FormContext from '../../context';
import axe from '../../../Axios';
import withMaybe from '../../../HOC/withMaybe';
import { LoadingHeartBeat } from '../../../Loading';
import GroupsList from '../../Groups/List';

const { Title } = Typography;

const TemplateBaseForm = (props) => {
  console.log('props', props);

  const [loading, setLoading] = useState(true);
  const [diagnosisList, setDiagnosisList] = useState([]);

  useEffect(() => {
    console.log('this.props.data', props.data);
    setVals();

    axe
      .get('admin/codelist/diagnosis')
      .then((result) => {
        console.log('result.data', result.data);
        setDiagnosisList(result.data);
        console.log('this.props.method', props.method);
        if (props.method !== 'duplicate') { setLoading(false); }
      })
      .catch((err) => console.log(err));
  }, []);


  const setVals = () => {
    console.log('this.props.data', props.data);

    if (props.data) {
      const { setFieldsValue } = props.form;
      console.log('WELCOME DAAT data', props.data);

      setFieldsValue({ groupsKeys: props.data.setFirst.groupsKeys });

      setTimeout(() => {
        setFieldsValue({
          groups: props.data.setFirst.groups.map(({ generatorsKeys }) => ({
            generatorsKeys,
          })),
        });
      }, 10);

      setTimeout(() => {
        setFieldsValue({
          ...props.data.setFirst,
        });
      }, 15);

      setTimeout(() => {
        setFieldsValue({ ...props.data.newData });
        setLoading(false);
      }, 20);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const values = props.form.getFieldsValue();
    console.log('FORM values', values);

    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        props.handleSubmit(values);
      }
    });
  };


  const { form } = props;

  form.getFieldDecorator('id', { initialValue: '' });
  form.getFieldDecorator('method', { initialValue: props.method });

  return (
    <Card>
      <Loading loading={loading} />
      <Title level={2}>Přidání šablony</Title>
      <FormContext.Provider value={form}>
        <Form onSubmit={handleSubmit}>
          <TitleInput />
          <DiagnosisSelect diagnosisList={diagnosisList} />
          <RequiredFields />
          <GroupsList loading={loading} />
          <Form.Item wrapperCol={{ span: 12 }}>
            <Button type="primary" htmlType="submit">
                Přidej šablonu
            </Button>
          </Form.Item>
        </Form>
      </FormContext.Provider>
    </Card>
  );
};


const isLoadingConditionFn = (props) => !props.loading;
const Loading = withMaybe(isLoadingConditionFn)(LoadingHeartBeat);

export default Form.create({ name: 'template_base_form' })(TemplateBaseForm);
