import React, { useContext } from 'react';
import { Form, Switch } from 'antd';
import FormContext from '../../../context';

import './helpers.less';

const IsExamCheckbox = ({ id }) => {
  const { getFieldDecorator } = useContext(FormContext);

  return (
    <Form.Item>
      <span className="label"> Považovat za skryté vyšetření:</span>
      {getFieldDecorator(`${id}.exam`, {
        trigger: 'onChange',
        valuePropName: 'checked',
        initialValue: false,
      })(<Switch />)}
    </Form.Item>
  );
};

export default IsExamCheckbox;
