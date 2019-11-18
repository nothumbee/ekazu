import React, { useContext } from 'react';
import { Form, Input } from 'antd';
import FormContext from '../../../context';

import './helpers.less';

// Decide trough props whether it got data or not

const UnitInput = ({ id }) => {
  const { getFieldDecorator, getFieldValue } = useContext(FormContext);

  const method = getFieldValue('method');
  const setOnChange = method === 'duplicate' || method === 'edit';

  return (
    <Form.Item label="Jednotka" required>
      {getFieldDecorator(`${id}.unit`, {
        trigger: setOnChange ? 'onChange' : 'onBlur',
        initialValue: null,
        ...(setOnChange ? {} : { valuePropName: 'defaultValue' }),
        rules: [
          {
            required: true,
            message: 'Vyplňte prosím toto pole!',
          },
        ],
      })(<Input />)}
    </Form.Item>
  );
};

export default UnitInput;
