import React, { useContext } from 'react';
import { Form, Switch } from 'antd';
import FormContext from '../context';
import ExamNumberInputs from '../Base/Inputs/Helpers/ExamNumberInputs';

const IsPartialExamForm = ({ id, handleFilterRanges }) => {
  const { getFieldDecorator, getFieldValue } = useContext(FormContext);

  const isPartialExam = getFieldValue(`${id}.isPartialExam`);
  return (
    <>
      <Form.Item>
        <span className="label"> Považovat za parciální vyšetření:</span>
        {getFieldDecorator(`${id}.isPartialExam`, {
          trigger: 'onChange',
          valuePropName: 'checked',
          initialValue: false,
        })(<Switch onChange={handleFilterRanges} />)}
      </Form.Item>

      {isPartialExam && <ExamNumberInputs id={id} />}
    </>
  );
};

export default IsPartialExamForm;
