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
      // error undefined
      title: '',
      images: {}
    }
  };

  const [exam, setExam] = useState(defaultExam);

  const handleChange = event => {
    const { name, value } = event.target;
    const newItem = { [name]: value };

    console.log('cNEW fddddds', newItem);

    setExam({ ...exam, ...newItem });
    onChange(id, exam, 'exams');
  };

  const handleGroupChange = (item, type) => {
    let newItem;
    if (type === 'imageGroup') {
      console.log('NEW ITEM IN IMAGE GROUP EXAM INPUT', item);

      newItem = { imageGroup: { ...exam.imageGroup, ...item } };
    } else if (type === 'textGroup') {
      newItem = { textGroup: { ...exam.textGroup, ...item } };
    }

    console.log('cNEW ASHDUIAHSDUIHASIUDHAISUDH', newItem);
    setExam({ ...exam, ...newItem });
    onChange(id, exam, 'exams');
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
