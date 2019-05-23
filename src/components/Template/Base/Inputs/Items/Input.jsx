import React, { useContext } from 'react';
import { Button, Input, Form, Icon } from 'antd';

import FormContext from '../../../context';

const InputGroup = Input.Group;

const ItemsInput = ({ id }) => {
  const context = useContext(FormContext);

  const { getFieldDecorator, getFieldValue, setFieldsValue } = context;

  const itemsField = `${id}.keys`;

  const handleAddItem = () => {
    const keys = getFieldValue(itemsField);
    const count = keys.length;
    const newItemId = keys[count - 1] + 1;
    const nextKeys = keys.concat(newItemId);

    setFieldsValue({
      [itemsField]: nextKeys
    });
  };

  const handleRemoveItem = item => {
    const keys = getFieldValue(itemsField);
    if (keys.length === 1) {
      return;
    }

    setFieldsValue({
      [itemsField]: keys.filter(key => key !== item)
    });
  };

  getFieldDecorator(itemsField, { initialValue: [0] });
  const keys = getFieldValue(itemsField);
  const formItems = keys.map(item => (
    <Form.Item key={item} label={`Text ${item}`}>
      {getFieldDecorator(`${id}.text[${item}]`, {
        trigger: 'onBlur',
        valuePropName: 'defaultValue',
        rules: [{ required: true, message: 'Please input your username!' }]
      })(<Input style={{ width: '60%', marginRight: 8 }} />)}

      {keys.length > 1 ? (
        <Icon
          className="dynamic-delete-button"
          type="minus-circle-o"
          onClick={() => handleRemoveItem(item)}
        />
      ) : null}
    </Form.Item>
  ));

  return (
    <InputGroup>
      {formItems}

      <Button type="dashed" onClick={handleAddItem}>
        <Icon type="plus" /> Add field
      </Button>
    </InputGroup>
  );
};

export default ItemsInput;
