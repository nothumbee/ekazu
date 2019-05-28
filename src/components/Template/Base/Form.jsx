import React from 'react';
import { Typography, Card, Form, Button } from 'antd';

import DiagnosisSelect from './Selects/Diagnosis/Select';
import RequiredFields from './RequiredFields/RequiredFields';
import './Form.less';

import { TitleInput } from './Inputs/helpers';
import CustomFields from './CustomFields/CustomFields';
import FormContext from '../context';
import axe from '../../Axios';
import withMaybe from '../../HOC/withMaybe';
import { LoadingHeartBeat } from '../../Loading';

const { Title } = Typography;

class TemplateBaseForm extends React.Component {
  state = { loading: true };

  componentDidMount() {
    console.log('this.props.data', this.props.data);
    this.setState({ ...this.props.data });

    axe
      .get('admin/codelist/diagnosis')
      .then(result => {
        this.setState({ diagnosisList: result.data, loading: false });
        this.setVals();
      })
      .catch(err => console.log(err));
  }

  setVals = () => {
    console.log('this.props.data', this.props.data);

    if (this.props.data) {
      const { first, after } = this.props.data;

      this.props.form.setFieldsValue({
        ...first
      });

      this.props.form.setFieldsValue({
        ...(after && after)
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const values = this.props.form.getFieldsValue();
    console.log('values', values);

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.handleSubmit(values);
      }
    });
  };

  render() {
    const { form } = this.props;

    const isLoadingConditionFn = props => !props.loading;
    const Loading = withMaybe(isLoadingConditionFn)(LoadingHeartBeat);

    form.getFieldDecorator('uid', { initialValue: '' });
    return (
      <Card>
        <Loading loading={this.state.loading} />
        <Title level={2}>Přidání šablony</Title>
        <FormContext.Provider value={form}>
          <Form onSubmit={this.handleSubmit}>
            <TitleInput />
            <DiagnosisSelect diagnosisList={this.state.diagnosisList} />
            <RequiredFields />
            <CustomFields count={this.props.data && this.props.data.count} />
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
