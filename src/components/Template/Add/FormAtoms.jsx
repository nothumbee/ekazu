import React, { useState } from 'react';
// boolean checkbox

export const BaseNumberInput = ({
  name,
  type,
  value,
  placeholder,
  checked
}) => {
  return <input type="checkbox" value="true" name="show" />;
};

const ShowInput = () => {
  return (
    <div>
      Zobrazit <input type="checkbox" value="true" name="show" />
    </div>
  );
};

const MalusInput = () => {
  return (
    <div>
      Malus <input type="number" value="0" name="malus" />
    </div>
  );
};

const PriceInput = () => {
  return (
    <div>
      Price <input type="number" value="0" name="price" />
    </div>
  );
};

const BonusInput = () => {
  return (
    <div>
      Bonus <input type="number" value="0" name="bonus" />
    </div>
  );
};

const ItemsInput = () => {
  const [items, setItems] = useState([1]);
  const [count, setCount] = useState(1);
  const addItem = (items, newItem) => {
    setItems([...items, newItem]);
  };
  return (
    <div>
      Add options:
      {items.map(item => (
        <input type="text" name={`item${item}`} key={item} />
      ))}
      <button
        onClick={() => {
          const newCount = count + 1;
          setCount(newCount);
          addItem(items, newCount);
        }}
      >
        Add Item
      </button>
    </div>
  );
};

const ImageGroupInput = () => {
  const [items, setItems] = useState([1]);
  const [count, setCount] = useState(1);
  const addItem = (items, newItem) => {
    setItems([...items, newItem]);
  };
  return (
    <div>
      <b>Add Images:</b> <br />
      <TitleInput />
      {items.map(item => (
        <>
          Image <input type="file" name={`item${item}`} key={item} />
          <br />
        </>
      ))}
      <button
        onClick={() => {
          const newCount = count + 1;
          setCount(newCount);
          addItem(items, newCount);
        }}
      >
        Add Next Image
      </button>
      {/* <button
        onClick={() => {
          const newCount = count + 1;
          setCount(newCount);
          addItem(items, newCount);
        }}
      >
        Add Next Image Group
      </button> */}
    </div>
  );
};

const RangeInput = () => {
  return (
    <div>
      <MinInput />
      <MaxInput />
    </div>
  );
};

const MinInput = () => {
  return (
    <div>
      Min <input type="number" value="0" name="min" />
    </div>
  );
};

const MaxInput = () => {
  return (
    <div>
      Max <input type="number" value="0" name="max" />
    </div>
  );
};

const TitleInput = () => {
  return (
    <div>
      Title <input type="text" value="TITLE" name="title" />
    </div>
  );
};

export const ExamInput = () => {
  const [values, setValues] = useState([]);
  const [exams, setExams] = useState([1]);

  return (
    <div className={'exam'}>
      <h2>Examination input</h2>
      <TitleInput />
      <ShowInput />
      <BonusInput />
      <MalusInput />
      <PriceInput />
      <ItemsInput />
      <ImageGroupInput />

      <button
        onClick={() => {
          setExams([...exams, exams[exams.length] + 1]);
        }}
      >
        Add Another Exam {exams.length}
      </button>
    </div>
  );
};
