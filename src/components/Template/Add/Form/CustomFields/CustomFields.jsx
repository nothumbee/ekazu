import React from 'react';
import CustomInputBase from '../../CustomInputBase';

const CustomFields = ({ fields, handleChange, data = {} }) => {
  // first convert fields
  return Object.keys(fields).map(fieldType =>
    fields[fieldType].map(fieldId => (
      <React.Fragment key={fieldId}>
        <CustomInputBase
          id={fieldId}
          type={fieldType}
          onChange={handleChange}
          data={data[fieldType][fieldId]}
          // placeholder={field.name}
        />
        <br />
      </React.Fragment>
    ))
  );
};

export default CustomFields;
