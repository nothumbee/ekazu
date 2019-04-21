import React from 'react';
import TemplateAddForm from '../../components/Template/Add/Form';
import { withRouter } from 'react-router';
import * as ROUTES from '../../constants/routes';
import DiagnosisAddForm from '../Diagnosis/AddForm';
import DiagnosisList from '../Diagnosis/List';
import TemplateList from '../Template/List';

const Admin = ({ location }) => {
  return <ActionDecision location={location.pathname} />;
};

const ActionDecision = ({ location }) => {
  console.log(location);
  switch (location) {
    case ROUTES.ADMIN:
      return <div>This is admin area only for authenticated access.</div>;

    case ROUTES.ADMIN_CREATE_TEMPLATE:
      return <TemplateAddForm />;

    case ROUTES.ADMIN_CREATE_DIAGNOSIS:
      return <DiagnosisAddForm />;

    case ROUTES.ADMIN_SHOW_TEMPLATE_LIST:
      return <TemplateList />;

    case ROUTES.ADMIN_SHOW_DIAGNOSIS_LIST:
      return <DiagnosisList />;

    default:
      return null;
  }
};

export default withRouter(Admin);
