import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";

import { STUDENT, ADMIN } from "../../constants/routes";

const RoleDecisionForm = () => {
  return (
    <Card>
      Jste učitel nebo student?
      <br />
      <Link to={STUDENT}>STUDENT >></Link>
      <br />
      <Link to={ADMIN}>ADMIN >></Link>
    </Card>
  );
};

export default RoleDecisionForm;
