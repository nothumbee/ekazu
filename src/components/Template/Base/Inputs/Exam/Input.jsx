import React, { useContext } from "react";
import { Row, Typography, Input, Collapse } from "antd";

import { TitleInput, IsExamCheckbox } from "../helpers";
import ItemsInput from "../Items/Input";
import withInjected from "../../../../HOC/withInjected";
import ExamNumberInputs from "../ExamNumberInputs";
import FormContext from "../../../context";
import ImageGroupInput from "../ImageGroup/Input";

const Panel = Collapse.Panel;

const InputGroup = Input.Group;

const { Title } = Typography;

const ExamInput = ({ id, deleteButton }) => {
  const context = useContext(FormContext);
  const { getFieldValue } = context;

  const ExamInputBase = props => (
    <Panel header="Vyšetření" key={id}>
      <InputGroup className={"exam"}>
        <TitleInput id={id} />

        <IsExamCheckbox id={id} />
        <Row gutter={16}>
          {props.children}

          <ItemsInput id={id} />
          <ImageGroupInput id={id} />
          {props.deleteButton}
        </Row>
      </InputGroup>
    </Panel>
  );

  const isExamConditionFn = props => props.isExam;

  const ExamInputWithInjected = withInjected(
    isExamConditionFn,
    ExamNumberInputs
  )(ExamInputBase);

  const isExam = getFieldValue(`${id}.isExam`);

  return (
    <ExamInputWithInjected
      isExam={isExam}
      id={id}
      deleteButton={deleteButton}
    />
  );
};

export default ExamInput;
