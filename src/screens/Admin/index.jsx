import React from "react";
import { withAuthorization } from "../../components/Session";

// import { compose } from 'recompose';

import { withRouter } from "react-router";
import * as ROUTES from "../../constants/routes";
import TemplateAddForm from "../../components/Template/Add/Form/Form";
import DiagnosisAddForm from "../../components/Diagnosis/AddForm";
import TemplateList from "../../components/Template/List";
import DiagnosisList from "../../components/Diagnosis/List";

const AdminPageBase = props => {
  return <ActionDecision location={props.location.pathname} />;
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

    case ROUTES.ADMIN_EDIT_TEMPLATE:
      return <DiagnosisList />;
    // edit, delete template, insert as copy of existing template
    default:
      return null;
  }
};

const condition = authUser => !!authUser;

const AdminPage = withAuthorization(condition)(AdminPageBase);
// npm i recompose
// const AdminPage = compose(
//   withAuthorization(condition),
//   withRouter
// )(AdminPageBase);

export default AdminPage;
