import React from 'react';
import TemplateBaseForm from '../../Base/Form';
import axe from '../../../Axios';
import validateOutcomingData from '../../Validate/Outcoming';

class TemplateAddForm extends React.Component {
  handleSubmit = data => {
    const validData = validateOutcomingData(data, 'add');
    console.log('VALIDATED DATA TO SEND ADDDD :', validData);
    axe.post(`/admin/template/`, JSON.stringify(validData));
  };

  render() {
    return <TemplateBaseForm handleSubmit={this.handleSubmit} />;
  }
}

export default TemplateAddForm;
