import React, { useContext } from 'react';
import { Row, Input, Card } from 'antd';

import TitleInput from '../Helpers/TitleInput';
import ItemsInput from '../Items/Input';
import FormContext from '../../../context';
import ImageGroupInput from '../ImageGroup/Input';
import IsExamModule from '../Helpers/IsExamModule';

const InputGroup = Input.Group;

const ExamInput = ({ id }) => {
  const { getFieldDecorator } = useContext(FormContext);

  getFieldDecorator(`${id}.id`, { initialValue: '' });

  return (
    <Card
      style={{
        width: '100%', backgroundColor: '#e3e3e3', borderRadius: '10px', boxShadow: '0px 0px 10px #eee', margin: '20px 0px',
      }}
      title={<TitleInput id={id} />}
    >
      <InputGroup className="exam">
        <IsExamModule id={id} />
        <Row gutter={16}>
          <ItemsInput id={id} />
          <ImageGroupInput id={id} />
        </Row>
      </InputGroup>
    </Card>
  );
};

export default ExamInput;
