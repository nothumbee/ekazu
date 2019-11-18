import React, { useContext } from 'react';
import { Card } from 'antd';
import TitleInput from '../Inputs/Helpers/TitleInput';
import FormContext from '../../context';
import IsExamModule from '../Inputs/Helpers/IsExamModule';
import GeneratorAddForm from '../../Generators/AddForm';

const GroupInput = ({ id }) => {
  const { getFieldDecorator } = useContext(FormContext);

  getFieldDecorator(`${id}.id`, { initialValue: '' });

  return (
    <Card
      style={{
        width: '100%',
        backgroundColor: '#f2f2f2',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px #eee',
        margin: '20px 0px',
      }}
      title={<TitleInput id={id} />}
    >
      <IsExamModule id={id} />
      <GeneratorAddForm id={id} />
    </Card>
  );
};

export default GroupInput;
