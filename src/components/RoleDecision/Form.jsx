import React from "react";
import { Link } from "react-router-dom";

import "./Form.css";

import { STUDENT, ADMIN } from "../../constants/routes";
import { ReactComponent as StudentIllustration } from "./student.svg";
import { ReactComponent as TeacherIllustration } from "./teacher.svg";

const RoleDecisionForm = () => {
  return (
    <div className="RoleDecisionForm">
      <div className="title">Jste učitel nebo student?</div>
      <Link to={STUDENT}>
        <div className="item">
          <StudentIllustration />
          <div className="text">Student</div>
        </div>
      </Link>
      <Link to={ADMIN}>
        <div className="item">
          <TeacherIllustration />
          <div className="text">Učitel</div>
        </div>
      </Link>
    </div>
  );
};

export default RoleDecisionForm;
