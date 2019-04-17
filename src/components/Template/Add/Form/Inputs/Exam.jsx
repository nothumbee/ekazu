import React, { useState } from 'react';
import {
  TitleInput,
  ShowInput,
  BonusInput,
  MalusInput,
  PriceInput,
  ItemsInput
} from './helpers';

const ExamInput = ({ onChange, id }) => {
  const [exam, setExam] = useState({});
  // i dont even need the state here

  const handleChange = event => {
    // imageGroup was in param
    const { name, type, checked, value } = event.target;
    const insertValue = type === 'checkbox' ? checked : value;
    const newExam = { ...exam, show: false, [name]: insertValue };

    setExam(newExam);
    onChange(id, newExam, 'exams');
    // and send to onChange handler with id of group and save to state
  };

  const handleGroupChange = (item, type) => {
    let newExam;
    if (type === 'imageGroup') {
      newExam = { ...exam, imageGroup: { ...exam.imageGroup, ...item } };
    } else if (type === 'textGroup') {
      newExam = { ...exam, textGroup: { ...exam.textGroup, ...item } };
    }

    setExam(newExam);
    onChange(id, newExam, 'exams');
  };

  return (
    <div className={'exam'}>
      <h2>Examination input</h2>
      <TitleInput onChange={handleChange} />
      <ShowInput onChange={handleChange} />
      <BonusInput onChange={handleChange} />
      <MalusInput onChange={handleChange} />
      <PriceInput onChange={handleChange} />
      <ItemsInput onChange={handleGroupChange} />
      <ImageGroupInput onChange={handleGroupChange} />
    </div>
  );
};

export default ExamInput;

const ImageGroupInput = ({ onChange }) => {
  const [items, setItems] = useState([1]);
  const [count, setCount] = useState(1);

  const handleAddItem = event => {
    event.preventDefault();
    const newCount = count + 1;
    setCount(newCount);
    setItems([...items, newCount]);
  };

  const handleChange = event => {
    const { name, value, type } = event.target;

    const newItem =
      type === 'file' ? { images: { [name]: value } } : { [name]: value };
    console.log(newItem);
    onChange(newItem, 'imageGroup');
  };

  return (
    <div>
      <b>Add Images:</b> <br />
      <TitleInput onChange={handleChange} />
      {items.map(item => (
        <React.Fragment key={item}>
          Image{' '}
          <input
            type="file"
            name={`image${item}`}
            key={item}
            onChange={handleChange}
          />
          <br />
        </React.Fragment>
      ))}
      <button
        onClick={event => {
          handleAddItem(event);
        }}
      >
        Add Next Image
      </button>
    </div>
  );
};
