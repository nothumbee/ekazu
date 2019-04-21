import React from 'react';
import Admin from '../../components/Admin';
import { withAuthorization } from '../../components/Session';

// import { compose } from 'recompose';

const AdminPageBase = () => {
  return <Admin />;
};

const condition = authUser => !!authUser;

const AdminPage = withAuthorization(condition)(AdminPageBase);

export default AdminPage;
