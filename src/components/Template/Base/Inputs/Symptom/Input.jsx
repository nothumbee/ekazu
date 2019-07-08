import React, { useContext } from "react";
import TitleInput from "../Helpers/TitleInput";
import IsExamCheckbox from "../Helpers/IsExamCheckBox";
import ItemsInput from "../Items/Input";

import { Input } from "antd";
import FormContext from "../../../context";
import ExamNumberInputs from "../Helpers/ExamNumberInputs";
import withInjected from "../../../../HOC/withInjected";

const InputGroup = Input.Group;

const SymptomInput = ({ id }) => {
  const context = useContext(FormContext);
  const { getFieldValue, getFieldDecorator } = context;

  getFieldDecorator(`${id}.id`, { initialValue: "" });

  // this all
  const SymptomInputBase = ({ id, children }) => (
    <InputGroup className="symptom">
      <IsExamCheckbox id={id} />
      {children}
      <TitleInput id={id} />
      <ItemsInput id={id} />
    </InputGroup>
  );

  const isExamConditionFn = props => props.isExam;

  const SymptomInputWithInjected = withInjected(
    isExamConditionFn,
    ExamNumberInputs
  )(SymptomInputBase);

  const isExam = getFieldValue(`${id}.isExam`);
  // this all should be outside this component, but then the edititing and dup form does not work - data doesnt show when set by setFieldsValue

  return <SymptomInputWithInjected isExam={isExam} id={id} />;
};

export default SymptomInput;

// const CustomInput = ({ id, type }) => {
//   const context = useContext(FormContext);
//   const { getFieldValue } = context;

//   const CustomInputBase = props =>
//     ({
//       exams: <ExamInputBase {...props} />,
//       ranges: <RangeInputBase {...props} />,
//       symptoms: <SymptomInputBase {...props} />
//     }[type]);

//   const isExamConditionFn = props => props.isExam;

//   const CustomInputWithInjected = withInjected(
//     isExamConditionFn,
//     ExamNumberInputs
//   )(CustomInputBase);

//   const isExam = getFieldValue(`${id}.isExam`);

//   return <CustomInputWithInjected isExam={isExam} id={id} />;
// };

// const ExamInputBase = props => (
//   <InputGroup className={'exam'}>
//     <TitleInput id={id} />

//     <IsExamCheckbox id={id} />
//     <Row gutter={16}>
//       {props.children}

//       <ItemsInput id={id} />
//       <ImageGroupInput id={id} />
//     </Row>
//   </InputGroup>
// );

// const SymptomInputBase = props => (
//   <InputGroup className="symptom">
//     <IsExamCheckbox id={id} />
//     {props.children}
//     <TitleInput id={id} />
//     <ItemsInput id={id} />
//   </InputGroup>
// );

// const RangeInputBase = props => {
//   const rangeNumberInputs = [
//     { name: 'min', title: 'Minimum' },
//     { name: 'max', title: 'Maximum' }
//   ];

//   const RangeNumberInputs = () =>
//     rangeNumberInputs.map((input, index) => (
//       <Col span={8} key={index}>
//         <CustomNumberInput id={id} name={input.name}>
//           {input.title}
//         </CustomNumberInput>
//       </Col>
//     ));

//   return (
//     <InputGroup className="range">
//       <IsExamCheckbox id={id} />
//       {props.children}
//       <Row gutter={16}>
//         <Col span={8}>
//           <TitleInput id={id} />
//         </Col>
//         <RangeNumberInputs />
//       </Row>
//     </InputGroup>
//   );
// };
