import React, { useRef, useState } from 'react';
import { Affix, Icon, Collapse } from 'antd';

import CustomFieldAddForm from './AddForm';
import CustomInputBase from './CustomInputBase';

const Panel = Collapse.Panel;

const CustomFields = () => {
  const id = useRef(0);

  const [fields, setFields] = useState([]);

  const handleAddField = (event, type) => {
    const nextFields = fields.concat({ id: id.current++, type });
    setFields(nextFields);
  };

  const handleRemoveItem = item => {
    setFields(fields.filter(({ id }) => id !== item.id));
  };

  const header = type =>
    ({
      exams: 'Vyšetření',
      ranges: 'Rozmezí',
      symptoms: 'Symptom'
    }[type]);

  return (
    <div>
      <Affix offsetTop={64}>
        <CustomFieldAddForm handleSubmit={handleAddField} />
      </Affix>

      <Collapse>
        {fields.map((field, index) => (
          <Panel
            key={index}
            header={header(field.type)}
            extra={
              <Icon
                className="dynamic-delete-button"
                type="minus-circle-o"
                onClick={() => handleRemoveItem(field)}
              />
            }
          >
            <CustomInputBase
              id={`${field.type}[${field.id}]`}
              type={field.type}
            />
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default CustomFields;
