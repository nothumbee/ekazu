import React, { useContext } from 'react';

import { Form, Select, Input } from 'antd';
import FormContext from '../../../context';

const Option = Select.Option;

const DiagnosisSelect = props => {
  const context = useContext(FormContext);

  const { getFieldDecorator } = context;

  const SelectBase = () => (
    <Input.Group>
      <Form.Item label={'Vyber diagnózu'} defaultValue={''} required={true}>
        {getFieldDecorator('diagnosis', {
          rules: [{ required: true, message: 'Vyberte prosím diagnózu!' }]
        })(
          <Select style={{ width: 220 }}>
            {props.diagnosisList &&
              props.diagnosisList.map((diagnosis, index) => (
                <Option key={index} value={diagnosis.definition}>
                  {diagnosis.definition}
                </Option>
              ))}
          </Select>
        )}
      </Form.Item>
    </Input.Group>
  );

  return <SelectBase />;
};

export default DiagnosisSelect;
