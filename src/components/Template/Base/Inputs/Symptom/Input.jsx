import React, { useContext } from "react";
import { TitleInput, IsExamCheckbox } from "../helpers";
import ItemsInput from "../Items/Input";
import Title from "antd/lib/typography/Title";

import { Input, Collapse } from "antd";
import FormContext from "../../../context";
import ExamNumberInputs from "../ExamNumberInputs";
import withInjected from "../../../../HOC/withInjected";

const Panel = Collapse.Panel;

const InputGroup = Input.Group;

const SymptomInput = ({ id, deleteButton }) => {
  const context = useContext(FormContext);
  const { getFieldValue } = context;

  const SymptomInputBase = props => (
    <Panel header="Symptom nebo text">
      <InputGroup className="symptom">
        <IsExamCheckbox id={id} />
        {props.children}
        <TitleInput id={id} />
        <ItemsInput id={id} />
      </InputGroup>
      {props.deleteButton}
    </Panel>
  );

  const isExamConditionFn = props => props.isExam;

  const SymptomInputWithInjected = withInjected(
    isExamConditionFn,
    ExamNumberInputs
  )(SymptomInputBase);

  const isExam = getFieldValue(`${id}.isExam`);

  return (
    <SymptomInputWithInjected
      isExam={isExam}
      id={id}
      deleteButton={deleteButton}
    />
  );
};

export default SymptomInput;
