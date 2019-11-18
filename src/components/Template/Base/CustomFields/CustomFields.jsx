import React, { useRef, useContext } from 'react';
import { Affix, Icon, List } from 'antd';

import CustomFieldAddForm from './AddForm';
import CustomInputBase from './CustomInputBase';
import immutablySwapItems from '../../../helpers/arraySwap';
import FormContext from '../../context';

const CustomFields = ({ id: setId, isPartialExam }) => {
  const { getFieldDecorator, setFieldsValue, getFieldValue } = useContext(
    FormContext,
  );
  const keysName = setId ? `${setId}.keys` : 'keys';

  const counts = useRef({
    groups: 0,
    symptoms: 0,
    exams: 0,
    ranges: 0,
    partials: 0,
  });

  const handleAddField = (event, type) => {
    const nextId = counts.current[type]++;
    const nextFields = keys.concat({ id: nextId, type });
    setFieldsValue({
      [keysName]: nextFields,
    });
  };

  const handleRemoveItem = (item) => {
    const nextFields = keys.filter(
      ({ id, type }) => !(id === item.id && type === item.type),
    );
    setFieldsValue({
      [keysName]: nextFields,
    });
  };

  const sortItem = (direction) => ({
    up: (field) => {
      const fieldIndex = keys.indexOf(field);
      const nextFields = immutablySwapItems(keys, fieldIndex, fieldIndex - 1);
      nextFields
          && setFieldsValue({
            [keysName]: nextFields,
          });
    },
    down: (field) => {
      const fieldIndex = keys.indexOf(field);
      const nextFields = immutablySwapItems(keys, fieldIndex, fieldIndex + 1);
      nextFields
          && setFieldsValue({
            [keysName]: nextFields,
          });
    },
  }[direction]);

  const getChildId = (field) => (setId
    ? `${setId}.${field.type}[${field.id}]`
    : `${field.type}[${field.id}]`);

  getFieldDecorator(keysName, { initialValue: [] });
  const keys = getFieldValue(keysName);

  return (
    <div style={{ width: '100%' }}>
      <Affix offsetTop={64}>
        <CustomFieldAddForm
          handleSubmit={handleAddField}
          onlyRanges={!!isPartialExam}
          isGroup={!!setId}
        />
      </Affix>

      {keys.map((field, index) => (
        <List.Item
          key={index}
          actions={[
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              onClick={() => handleRemoveItem(field)}
            />,
            <Icon type="up" onClick={() => sortItem('up')(field)} />,
            <Icon type="down" onClick={() => sortItem('down')(field)} />,
          ]}
        >
          <CustomInputBase
            id={getChildId(field)}
            type={field.type}
            isPartialExam={isPartialExam}
          />
        </List.Item>
      ))}
    </div>
  );
};

export default CustomFields;
