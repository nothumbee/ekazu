import React, { useState } from 'react';
import { Row, Col, Typography } from 'antd';
import { TitleInput, CustomNumberInput, IsExamCheckbox } from '../helpers';
// import ImageGroupInput from '../ImageGroup/Input';
import ItemsInput from '../Items/Input';

const { Title } = Typography;

const ExamInput = ({ onChange, id, data = {} }) => {
  const defaultExam = {
    title: '',
    exam: false,
    price: '',
    malus: '',
    bonus: '',
    textGroup: {},
    imageGroup: {
      title: '',
      images: {}
    }
  };

  const [exam, setExam] = useState(data || defaultExam);

  const handleChange = event => {
    const { name, value } = event.target;
    const newItem = { [name]: value };
    console.log('NEW ITEMOOO', newItem);

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
      newGroup = { text: group };
    }

    const newExam = {
      ...exam,
      ...newGroup
    };
    setExam(newExam);
    onChange(id, newExam, 'exams');
  };

  const examNumberInputs = [
    { name: 'bonus', title: 'Bonus', value: data.bonus },
    { name: 'malus', title: 'Malus', value: data.malus },
    { name: 'price', title: 'Price', value: data.price }
  ];

  const ExamNumberInputs = () =>
    examNumberInputs.map((input, index) => (
      <Col span={8} key={index}>
        <CustomNumberInput
          name={input.name}
          onChange={handleChange}
          value={input.value}
        >
          {input.title}
        </CustomNumberInput>
      </Col>
    ));

  return (
    <div className={'exam'}>
      <Title level={4}>Přidání vyšetření</Title>

      <TitleInput onChange={handleChange} value={data.title} />

      <IsExamCheckbox checked={data.exam} onChange={handleChange} />
      <Row gutter={16}>
        <ExamNumberInputs />

        <ItemsInput onChange={handleGroupChange} data={data.text} />
        {/* <ImageGroupInput onChange={handleGroupChange} data={data.imageGroup} /> */}
      </Row>
    </div>
  );
};

export default ExamInput;

// import React, { useState } from 'react';
// import { Row, Col } from 'antd';
// import { TitleInput, BonusInput, MalusInput, PriceInput } from '../helpers';
// import ImageGroupInput from '../ImageGroup/Input';
// import ItemsInput from '../Items/Input';

// const ExamInput = ({ onChange, id, data = {} }) => {
//   const defaultExam = {
//     title: '',
//     exam: true,
//     price: '',
//     malus: '',
//     bonus: '',
//     textGroup: {},
//     imageGroup: {
//       title: '',
//       images: {}
//     }
//   };

//   const [exam, setExam] = useState(defaultExam);

//   const handleChange = event => {
//     const { name, value } = event.target;
//     const newItem = { [name]: value };

//     const newExam = {
//       ...exam,
//       ...newItem
//     };

//     setExam(newExam);
//     onChange(id, newExam, 'exams');
//   };

//   const handleGroupChange = (group, type) => {
//     let newGroup;
//     if (type === 'imageGroup') {
//       newGroup = { imageGroup: group };
//     } else if (type === 'textGroup') {
//       newGroup = { textGroup: group };
//     }

//     const newExam = {
//       ...exam,
//       ...newGroup
//     };
//     setExam(newExam);
//     onChange(id, newExam, 'exams');
//   };

//   return (
//     <div className={'exam'}>
//       <h2>Přidání vyšetření</h2>

//       <TitleInput onChange={handleChange} value={data.title} />

//       <Row gutter={16}>
//         <Col span={8}>
//           <BonusInput onChange={handleChange} value={data.bonus} />
//         </Col>
//         <Col span={8}>
//           <MalusInput onChange={handleChange} value={data.malus} />
//         </Col>
//         <Col span={8}>
//           <PriceInput onChange={handleChange} value={data.price} />
//         </Col>
//         <ItemsInput onChange={handleGroupChange} data={data.textGroup} />
//         <ImageGroupInput onChange={handleGroupChange} data={data.imageGroup} />
//       </Row>
//     </div>
//   );
// };

// export default ExamInput;
