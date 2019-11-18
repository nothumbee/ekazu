import React, { useContext } from 'react';
import { Form, Input } from 'antd';
import FormContext from '../../../context';

import './helpers.less';

const TitleInput = ({ id }) => {
  const { getFieldDecorator, getFieldValue } = useContext(FormContext);

  const method = getFieldValue('method');
  const setOnChange = method === 'duplicate' || method === 'edit';

  return (
    <Input.Group>
      <Form.Item label="Název" required>
        {getFieldDecorator(id ? `${id}.title` : 'title', {
          trigger: setOnChange ? 'onChange' : 'onBlur',
          ...(setOnChange ? {} : { valuePropName: 'defaultValue' }),
          initialValue: null,
          rules: [{ required: true, message: 'Vyplňtě prosím toto pole!' }],
        })(<Input />)}
      </Form.Item>
    </Input.Group>
  );
};

export default TitleInput;
