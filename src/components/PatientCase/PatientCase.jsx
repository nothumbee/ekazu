import React, { Component, useState } from "react";
import { Typography } from "antd";
import { Button, List, Modal, Row } from "antd";

import axe from "../Axios";
import DiagnosisGuessForm from "../Diagnosis/Guess";
import Properties from "./Properties";
import withEither from "../HOC/withEither";
import { LoadingSpin } from "../Loading";

const { Title, Text } = Typography;

// Would be great to store the unfinished generated patient in localStorage or something
class PatientCase extends Component {
  state = {
    properties: [],
    caseID: "",
    exams: { hidden: [], visible: [] },
    loading: true,
    visibleExamsIDs: []
  };
  // add error to state to handle trough HOC

  componentDidMount() {
    // const currentCaseID = localStorage.getItem('currentCaseID');

    // if (!currentCaseID)
    axe.get("student").then(response => {
      const { properties, id } = response.data;
      // templateId
      const exams = properties.filter(property => !!property.exam);
      const symptoms = properties.filter(property => !property.exam);

      localStorage.setItem("currentCaseID", id);
      this.setState({
        caseID: id,
        exams: { visible: [], hidden: exams },
        properties: symptoms
      });

      setTimeout(() => {
        this.setState({ loading: false });
      }, 2000);
    });
  }

  handleShowExam = id => {
    console.log(id);
    this.setState(prevState => ({
      ...prevState,
      visibleExamsIDs: [...prevState.visibleExamsIDs, id]
    }));
  };

  render() {
    return (
      <div>
        <Title level={2}>Karta pacienta</Title>
        ID: <i>{this.state.caseID}</i>
        <Properties
          properties={this.state.properties}
          loading={this.state.loading}
        />
        <Exams
          exams={this.state.exams.hidden}
          handleShowExam={this.handleShowExam}
        />
        <DiagnosisGuessForm
          studentID={this.state.caseID}
          exams={this.state.visibleExamsIDs}
        />
      </div>
    );
  }
}

const Exams = ({ exams, handleShowExam }) => {
  return (
    <>
      <Title level={2}>Vyšetření</Title>
      <Row>
        <List
          size="small"
          bordered
          dataSource={exams}
          renderItem={exam => (
            <List.Item>
              <Exam exam={exam} handleShowExam={handleShowExam} />
            </List.Item>
          )}
        />
      </Row>
    </>
  );
};

const Exam = ({ exam, handleShowExam }) => {
  const [examining, setExamining] = useState(false);
  const [visible, setVisible] = useState(false);

  const handlePerformExam = () => {
    if (!visible) {
      setExamining(true);
      handleShowExam(exam.id);

      setTimeout(() => {
        setExamining(false);

        setVisible(true);
      }, 3000);
    }
  };

  const ImageGroup = () => {
    return exam.imageGroup.images.map((image, index) => (
      <div
        key={index}
        style={{
          width: 120,
          height: "auto",
          backgroundColor: "blue",
          color: "white",
          margin: 10,
          padding: 10
        }}
      >
        image {image.filename}
      </div>
      //   <img key={index} src={image.fileName} alt={image.text} />
    ));
  };

  const ExamBase = props => {
    return (
      <>
        {visible && (
          <>
            <Text> {exam.text}</Text>
            {exam.imageGroup && <ImageGroup />}
          </>
        )}
        {!visible && (
          <Button type="primary" onClick={handlePerformExam}>
            Poslat pacienta na vyšetření
          </Button>
        )}
      </>
    );
  };

  const isLoadingConditionFn = props => props.examining;
  const ExaminingModal = () => (
    <Modal
      visible={true}
      footer={null}
      closable={false}
      style={{ textAlign: "center" }}
    >
      Vyšetřuji pacienta
      <LoadingSpin />
    </Modal>
  );
  const ExamWithExamining = withEither(isLoadingConditionFn, ExaminingModal)(
    ExamBase
  );

  return (
    <>
      <Title level={4}>{exam.title}</Title>
      <ExamWithExamining examining={examining} />
    </>
  );
};

export default PatientCase;
