import React from 'react';
import { Link } from 'react-router-dom';

import { STUDENT, ADMIN } from '../../constants/routes';

const RoleDecisionForm = () => {
  return (
    <div>
      Are you teacher or student?
      <br />
      <Link to={STUDENT}>STUDENT >></Link>
      <br />
      <Link to={ADMIN}>ADMIN >></Link>
    </div>
  );
};

export default RoleDecisionForm;
