import React, { useContext } from "react";
import { Button, Input, Form, Icon } from "antd";

import FormContext from "../../../context";

const InputGroup = Input.Group;

export const ItemsInput = ({ id }) => {
  const context = useContext(FormContext);

  const { getFieldDecorator, getFieldValue, setFieldsValue } = context;

  const itemsField = `${id}.keys`;

  // const [itemsCount, setItemsCount] = useState(
  //   getFieldValue(itemsField) ? getFieldValue(itemsField).length - 1 : 0
  // );

  const handleAddItem = event => {
    // can use data-binding to get
    const keys = getFieldValue(itemsField);
    const count = keys.length;
    const newItemId = keys[count - 1] + 1;
    const nextKeys = keys.concat(newItemId);

    // can use data-binding to set
    // important! notify form to detect changes
    setFieldsValue({
      [itemsField]: nextKeys
    });
  };

  const handleRemoveItem = item => {
    // can use data-binding to get
    const keys = getFieldValue(itemsField);
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    setFieldsValue({
      [itemsField]: keys.filter(key => key !== item)
    });
  };

  getFieldDecorator(itemsField, { initialValue: [0] });
  const keys = getFieldValue(itemsField);
  const formItems = keys.map((item, index) => (
    <Form.Item key={item} label={`Text ${item}`}>
      {getFieldDecorator(`${id}.text[${item}]`, {
        trigger: "onBlur",
        valuePropName: "defaultValue",
        rules: [{ required: true, message: "Please input your username!" }]
      })(<Input style={{ width: "60%", marginRight: 8 }} />)}

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
