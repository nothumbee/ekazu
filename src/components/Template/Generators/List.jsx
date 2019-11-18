import React, { useRef, useContext } from 'react';
import { Icon, List, Card } from 'antd';

import immutablySwapItems from '../../helpers/arraySwap';
import FormContext from '../context';
import GeneratorAddForm from './AddForm';
import GeneratorSingle from './Single';
import * as TYPES from './generatorTypes';
import TitleInput from '../Base/Inputs/Helpers/TitleInput';
import IsPartialExamForm from './IsPartialExamForm';

const GeneratorsList = ({ id, actions }) => {
  const { getFieldDecorator, setFieldsValue, getFieldValue } = useContext(
    FormContext,
  );
  const keysName = `${id}.generatorsKeys`;

  const count = useRef(0);

  const handleAddGenerator = (type) => {
    const nextId = count.current++;
    const nextFields = generatorsKeys.concat({ id: nextId, type });
    setFieldsValue({
      [keysName]: nextFields,
    });
  };

  const handleRemoveGenerator = (item) => {
    const nextFields = generatorsKeys.filter(
      ({ id, type }) => !(id === item.id && type === item.type),
    );
    setFieldsValue({
      [keysName]: nextFields,
    });
  };

  const handleFilterRanges = () => {
    const nextFields = generatorsKeys.filter((generator) => generator.type === TYPES.RANGE);
    setFieldsValue({
      [keysName]: nextFields,
    });
  };

  const sortItem = (direction) => ({
    up: (field) => {
      const fieldIndex = generatorsKeys.indexOf(field);
      const nextFields = immutablySwapItems(generatorsKeys, fieldIndex, fieldIndex - 1);
      nextFields
          && setFieldsValue({
            [keysName]: nextFields,
          });
    },
    down: (field) => {
      const fieldIndex = generatorsKeys.indexOf(field);
      const nextFields = immutablySwapItems(generatorsKeys, fieldIndex, fieldIndex + 1);
      nextFields
          && setFieldsValue({
            [keysName]: nextFields,
          });
    },
  }[direction]);

  const getChildId = (field) => `${id}.generators[${field.id}]`;

  getFieldDecorator(keysName, { initialValue: [] });
  getFieldDecorator(`${id}.order`, { initialValue: '' });
  getFieldDecorator(`${id}.id`, { initialValue: '' });
  const generatorsKeys = getFieldValue(keysName);

  return (
    <Card
      style={{
        width: '100%', backgroundColor: '#fafafa', marginTop: '20px', marginBottom: '20px',
      }}
      actions={actions}
    >
      <TitleInput id={id} />
      <IsPartialExamForm id={id} handleFilterRanges={handleFilterRanges} />
      <GeneratorAddForm
        handleSubmit={handleAddGenerator}
        onlyRanges={getFieldValue(`${id}.isPartialExam`)}
      />
      <List>
        {generatorsKeys.map((generator) => (
          <List.Item
            key={generator.id}
            actions={[
              <Icon
                className="dynamic-delete-button"
                type="minus-circle-o"
                onClick={() => handleRemoveGenerator(generator)}
              />,
              <Icon type="up" onClick={() => sortItem('up')(generator)} />,
              <Icon type="down" onClick={() => sortItem('down')(generator)} />,
            ]}
          >
            <GeneratorSingle
              id={getChildId(generator)}
              type={generator.type}
            />
          </List.Item>
        ))}
      </List>
    </Card>
  );
};

export default GeneratorsList;
