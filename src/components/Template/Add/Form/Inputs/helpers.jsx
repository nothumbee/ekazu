import React from 'react';

export const MalusInput = ({ onChange, value = '' }) => {
  return (
    <div>
      Malus{' '}
      <input type="number" value={value} name="malus" onChange={onChange} />
    </div>
  );
};

export const PriceInput = ({ onChange, value = '' }) => {
  return (
    <div>
      Cena{' '}
      <input type="number" value={value} name="price" onChange={onChange} />
    </div>
  );
};

export const BonusInput = ({ onChange, value = '' }) => {
  return (
    <div>
      Bonus{' '}
      <input type="number" value={value} name="bonus" onChange={onChange} />
    </div>
  );
};

export const MinInput = ({ onChange, value = '' }) => {
  return (
    <div>
      Minimum{' '}
      <input type="number" value={value} name="min" onChange={onChange} />
    </div>
  );
};

export const MaxInput = ({ onChange, value = '' }) => {
  return (
    <div>
      Maximum{' '}
      <input type="number" value={value} name="max" onChange={onChange} />
    </div>
  );
};

export const TitleInput = ({ onChange, value = '' }) => {
  return (
    <div>
      Název
      <input type="text" value={value} name={'title'} onChange={onChange} />
    </div>
  );
};
