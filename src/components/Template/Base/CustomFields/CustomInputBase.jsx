import React from "react";
import ExamInput from "../Inputs/Exam/Input";
import SymptomInput from "../Inputs/Symptom/Input";
import RangeInput from "../Inputs/Range/Input";

const CustomInputBase = ({ type, id, data, deleteButton }) => {
  switch (type) {
    case "exams":
      return <ExamInput id={id} data={data} deleteButton={deleteButton} />;
    case "ranges":
      return <RangeInput id={id} data={data} deleteButton={deleteButton} />;
    case "symptoms":
      return <SymptomInput id={id} data={data} deleteButton={deleteButton} />;

    default:
      return null;
  }
};

export default CustomInputBase;
