import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { TitleInput, BonusInput, MalusInput, PriceInput } from '../helpers';
import ImageGroupInput from '../ImageGroup/Input';
import ItemsInput from '../Items/Input';

const ExamInput = ({ onChange, id, data = {} }) => {
  const defaultExam = {
    title: '',
    exam: true,
    price: '',
    malus: '',
    bonus: '',
    textGroup: {},
    imageGroup: {
      title: '',
      images: {}
    }
  };

  const [exam, setExam] = useState(defaultExam);

  const handleChange = event => {
    const { name, value } = event.target;
    const newItem = { [name]: value };

    const newExam = {
      ...exam,
      ...newItem
    };

    setExam(newExam);
    onChange(id, newExam, 'exams');
  };

  const handleGroupChange = (group, type) => {
    let newGroup;
    if (type === 'imageGroup') {
      newGroup = { imageGroup: group };
    } else if (type === 'textGroup') {
      newGroup = { textGroup: group };
    }

    const newExam = {
      ...exam,
      ...newGroup
    };
    setExam(newExam);
    onChange(id, newExam, 'exams');
  };

  return (
    <div className={'exam'}>
      <h2>Přidání vyšetření</h2>

      <TitleInput onChange={handleChange} value={data.title} />

      <Row gutter={16}>
        <Col span={8}>
          <BonusInput onChange={handleChange} value={data.bonus} />
        </Col>
        <Col span={8}>
          <MalusInput onChange={handleChange} value={data.malus} />
        </Col>
        <Col span={8}>
          <PriceInput onChange={handleChange} value={data.price} />
        </Col>
        <ItemsInput onChange={handleGroupChange} data={data.textGroup} />
        <ImageGroupInput onChange={handleGroupChange} data={data.imageGroup} />
      </Row>
    </div>
  );
};

export default ExamInput;
