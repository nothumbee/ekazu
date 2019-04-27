import React from "react";
import { Link } from "react-router-dom";

import "./Form.css";

import { STUDENT, ADMIN } from "../../constants/routes";

const RoleDecisionForm = () => {
  return (
    <>
      <div className="title">Jste učitel nebo student?</div>
      <div className="item">
        <Link to={STUDENT}>Student</Link>
      </div>
      <div className="item">
        <Link to={ADMIN}>Učitel</Link>
      </div>
    </>
  );
};

export default RoleDecisionForm;
