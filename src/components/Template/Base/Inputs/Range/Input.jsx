import React, { useContext } from "react";
import CustomNumberInput from "../Helpers/CustomNumberInput";
import IsExamCheckBox from "../Helpers/IsExamCheckBox";
import TitleInput from "../Helpers/TitleInput";
import { Row, Col, Input } from "antd";

import withInjected from "../../../../HOC/withInjected";
import FormContext from "../../../context";
import ExamNumberInputs from "../Helpers/ExamNumberInputs";

const InputGroup = Input.Group;

const rangeNumberInputs = [
  { name: "min", title: "Minimum" },
  { name: "max", title: "Maximum" }
];

const RangeInput = ({ id }) => {
  const context = useContext(FormContext);
  const { getFieldValue, getFieldDecorator } = context;

  getFieldDecorator(`${id}.id`, { initialValue: "" });

  const isExam = getFieldValue(`${id}.isExam`);

  return <RangeInputWithInjected isExam={isExam} id={id} />;
};

const RangeInputBase = ({ id, children }) => (
  <InputGroup className="range">
    <IsExamCheckBox id={id} />
    {children}
    <Row gutter={16}>
      <Col span={8}>
        <TitleInput id={id} />
      </Col>
      <RangeNumberInputs id={id} />
    </Row>
  </InputGroup>
);

const RangeNumberInputs = ({ id }) =>
  rangeNumberInputs.map((input, index) => (
    <Col span={8} key={index}>
      <CustomNumberInput id={id} name={input.name}>
        {input.title}
      </CustomNumberInput>
    </Col>
  ));

const isExamConditionFn = props => props.isExam;

const RangeInputWithInjected = withInjected(
  isExamConditionFn,
  ExamNumberInputs
)(RangeInputBase);

export default RangeInput;
