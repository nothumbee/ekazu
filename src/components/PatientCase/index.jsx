import React, { Component } from 'react';
import { Typography } from 'antd';
import { Button } from 'antd';

import axe from '../Axios';
import DiagnosisGuessForm from '../Diagnosis/Guess';
import Properties from './Properties';

const { Title, Text } = Typography;

// Would be great to store the unfinished generated patient in localStorage or something
class PatientCase extends Component {
  state = {
    properties: [],
    caseID: '',
    exams: { hidden: [], visible: [] },
    loading: true,
    visible: [],
    hidden: []
  };
  // add error to state to handle trough HOC

  componentDidMount() {
    setTimeout(() => {
      axe.get('student').then(response => {
        // handle success
        const { properties, id, templateId } = response.data;
        console.log(response.data);

        const exams = properties.filter(property => !!property.exam);
        console.log('exams :', exams);

        const symptoms = properties.filter(property => !property.exam);
        console.log('symptoms :', symptoms);

        this.setState({
          caseID: id,
          exams: { visible: [], hidden: exams },
          properties: symptoms
        });

        this.setState({ loading: false });
      });
    }, 200);
  }

  handleShowNextExam = event => {
    event.preventDefault();
    // here i need to switch one item from one property to another
    if (this.state.exams.hidden.length)
      this.setState(prevState => {
        const newHidden = prevState.exams.hidden.filter(
          // could be abstracted to new func filterArrayByIndex
          (exam, index) => index !== 0
        );
        return {
          exams: {
            visible: [...prevState.exams.visible, prevState.exams.hidden[0]],
            hidden: newHidden // remove first item
          }
        };
      });
  };

  render() {
    return (
      <div>
        <Title level={2}>Random Patient Case</Title>
        ID: <i>{this.state.caseID}</i>
        <Properties
          properties={this.state.properties}
          loading={this.state.loading}
        />
        <Exams
          exams={this.state.exams.visible}
          handleShowNextExam={this.handleShowNextExam}
        />
        <DiagnosisGuessForm
          id={this.state.caseID}
          exams={this.state.exams.visible}
        />
      </div>
    );
  }
}

const Exams = ({ exams, handleShowNextExam }) => {
  console.log(exams);
  return (
    <>
      <Title level={4}>Exams</Title>
      {exams.map((exam, index) =>
        !exam.imageGroup ? (
          <div key={index}>
            <Title level={4}>{exam.title}</Title>
            <Text>{exam.text}</Text>
          </div>
        ) : (
          <ExamWithImageGroup
            key={index}
            title={exam.title}
            text={exam.text}
            imageGroup={exam.imageGroup}
          />
        )
      )}
      <Button type="primary" onClick={event => handleShowNextExam(event)}>
        Show Another Exam
      </Button>
    </>
  );
};

const ExamWithImageGroup = ({ title, text = '', imageGroup }) => {
  return (
    <div>
      <Title level={4}>{title}</Title>
      <Text>{text}</Text>

      {imageGroup.images.map((image, index) => (
        <img key={index} src={image.fileName} alt={image.text} />
      ))}
    </div>
  );
};

export default PatientCase;
