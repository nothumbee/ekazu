import React, { useEffect, useState } from 'react';
import axe from '../../../../Axios';
import withEither from '../../../../HOC/withEither';
import { LoadingSpin } from '../../../../Loading';

import { Form, Select, Input } from 'antd';

const Option = Select.Option;

const DiagnosisSelect = ({ diagnosis, handleChange }) => {
  const [loading, setLoading] = useState(true);
  const [diagnosisList, setDiagnosisList] = useState([]);

  const handleLoadDiagnosis = () => {
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

  useEffect(handleLoadDiagnosis);

  return (
    <Input.Group>
      <Form.Item label={'Vyber diagnózu'} defaultValue={'lucy'} required={true}>
        <Select style={{ width: 220 }}>
          {/* <Option value="lucy">Lucy</Option> */}
          {diagnosisList.map((diagnosis, index) => (
            <Option key={index} value={diagnosis.definition}>
              {diagnosis.definition}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Input.Group>
  );

  // const isLoadingConditionFn = props => props.loading;

  // const SelectWithLoading = withEither(isLoadingConditionFn, LoadingSpin)(
  //   Select
  // );

  // return Select;
};

export default DiagnosisSelect;
