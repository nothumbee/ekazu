import React, { useContext } from "react";
import { Row, Input } from "antd";

import TitleInput from "../Helpers/TitleInput";
import IsExamCheckbox from "../Helpers/IsExamCheckBox";
// import ItemsInput from '../Items/Input';
import withInjected from "../../../../HOC/withInjected";
import ExamNumberInputs from "../Helpers/ExamNumberInputs";
import FormContext from "../../../context";
import ImageGroupInput from "../ImageGroup/Input";

const InputGroup = Input.Group;

const ExamInput = ({ id }) => {
  const context = useContext(FormContext);
  const { getFieldValue, getFieldDecorator } = context;

  getFieldDecorator(`${id}.id`, { initialValue: "" });

  const isExam = getFieldValue(`${id}.isExam`);

  return <ExamInputWithInjected isExam={isExam} id={id} />;
};

const ExamInputBase = ({id, children}) => (
  <InputGroup className={"exam"}>
    <TitleInput id={id} />

    <IsExamCheckbox id={id} />
    <Row gutter={16}>
      {children}

      {/* <ItemsInput id={id} /> */}
      <ImageGroupInput id={id} />
    </Row>
  </InputGroup>
);

const isExamConditionFn = props => props.isExam;

const ExamInputWithInjected = withInjected(isExamConditionFn, ExamNumberInputs)(
  ExamInputBase
);

export default ExamInput;
