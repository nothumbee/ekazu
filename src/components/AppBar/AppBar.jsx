import React from 'react';
// import LoadPatient from '../Load/LoadPatient';
import { Link, withRouter } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const AppBar = () => {
  return (
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>ADMIN</Link>
      </li>
      <li>
        <Link to={ROUTES.STUDENT}>STUDENT</Link>
      </li>
      {/* <LoadPatient /> */}
    </ul>
  );
};

export default withRouter(AppBar);
