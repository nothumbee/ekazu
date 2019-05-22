import React, { useEffect, useState, useContext } from 'react';
import axe from '../../../../Axios';
import withEither from '../../../../HOC/withEither';
import { LoadingSpin } from '../../../../Loading';

import { Form, Select, Input } from 'antd';
import FormContext from '../../../context';

const Option = Select.Option;

const DiagnosisSelect = props => {
  const [loading, setLoading] = useState(true);
  const [diagnosisList, setDiagnosisList] = useState([]);

  const handleLoadDiagnosis = () => {
    console.log('LOADING :');
    if (!diagnosisList.length)
      axe
        .get('admin/codelist/diagnosis')
        .then(result => {
          setDiagnosisList(result.data);

          setTimeout(() => {
            setLoading(false);
          }, 1000);
        })
        .catch(err => console.log(err));
  };

  useEffect(handleLoadDiagnosis, []);

  const context = useContext(FormContext);

  const { getFieldDecorator } = context;

  const SelectBase = () => (
    <Input.Group>
      <Form.Item label={'Vyber diagnózu'} defaultValue={''} required={true}>
        {getFieldDecorator('diagnosis', {
          rules: [{ required: true, message: 'Please input your username!' }]
        })(
          <Select style={{ width: 220 }}>
            {diagnosisList.map((diagnosis, index) => (
              <Option key={index} value={diagnosis.definition}>
                {diagnosis.definition}
              </Option>
            ))}
          </Select>
        )}
      </Form.Item>
    </Input.Group>
  );

  const isLoadingConditionFn = props => props.loading;

  const SelectWithLoading = withEither(isLoadingConditionFn, LoadingSpin)(
    SelectBase
  );

  return <SelectWithLoading loading={loading} />;
};

export default DiagnosisSelect;
