import React, { useState, useContext } from 'react';
import { Button, Input, Form, Icon } from 'antd';

import FormContext from '../../../context';

const InputGroup = Input.Group;

let id = 1;

export const ItemsInput = ({ onChange, data = [''] }) => {
  const context = useContext(FormContext);

  const { getFieldDecorator, getFieldValue, setFieldsValue } = context;

  const [itemsGroup, setItemsGroup] = useState(data ? data : ['']);

  const handleAddItem = event => {
    // can use data-binding to get
    const keys = getFieldValue('keys');
    const nextKeys = keys.concat(id++);
    console.log('keys :', keys);
    console.log('nextKeys :', nextKeys);
    // can use data-binding to set
    // important! notify form to detect changes
    setFieldsValue({
      keys: nextKeys
    });
  };

  const handleRemoveItem = item => {
    // can use data-binding to get
    const keys = getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    setFieldsValue({
      keys: keys.filter(key => key !== item)
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    const newItemsGroup = [...itemsGroup];
    newItemsGroup[name] = value;

    setItemsGroup(newItemsGroup);
    onChange(newItemsGroup, 'textGroup');
  };

  getFieldDecorator('keys', { initialValue: [0] });
  const keys = getFieldValue('keys');
  const formItems = keys.map((item, index) => (
    <Form.Item key={item} label={`Text ${item}`}>
      {getFieldDecorator(`text${item}`, {
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
