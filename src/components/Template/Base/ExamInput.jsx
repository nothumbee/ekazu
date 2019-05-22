import React from 'react';

import { Form, Input, Icon } from 'antd';

const InputGroup = Input.Group;

const ExamInput = () => (
  <InputGroup>
    <Form.Item
      {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
      label={index === 0 ? 'Passengers' : ''}
      required={false}
      key={k}
    >
      {getFieldDecorator(`names[${k}]`, {
        validateTrigger: ['onChange', 'onBlur'],
        rules: [
          {
            required: true,
            whitespace: true,
            message: "Please input passenger's name or delete this field."
          }
        ]
      })(
        <Input
          placeholder="passenger name"
          style={{ width: '60%', marginRight: 8 }}
        />
      )}
      {keys.length > 1 ? (
        <Icon
          className="dynamic-delete-button"
          type="minus-circle-o"
          onClick={() => this.remove(k)}
        />
      ) : null}
    </Form.Item>
  </InputGroup>
);
