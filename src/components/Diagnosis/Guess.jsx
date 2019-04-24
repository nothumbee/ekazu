import React, { useState, useEffect } from "react";
import axe from "../Axios";
import Title from "antd/lib/typography/Title";
import { LoadingSpin } from "../Loading";
import withEither from "../HOC/withEither";

const DiagnosisGuessForm = ({ id, exams }) => {
  const [selectedDiagnosis, setSelectedDiagnosis] = useState("");
  const [diagnosisList, setDiagnosisList] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLoadDiagnosisList = () => {
    if (!diagnosisList.length)
      axe
        .get("student/diagnosis")
        .then(response => {
          setDiagnosisList(response.data);
          setLoading(false);
        })
        .catch(err => console.log(err));
  };
  useEffect(handleLoadDiagnosisList);

  const handleSuccessFinishedCase = () => {};

  const handleFinishCase = event => {
    /// have to be finished with new backend - send arr of exams + id of case and string of diagnosis from select
    event.preventDefault();
    console.log("Diagno :", id, selectedDiagnosis);
    const caseToFinish = {
      diagnosis: selectedDiagnosis,
      exams: exams.map(exam => exam.id)
    };

    axe
      .post(`student/${id}`, JSON.stringify(caseToFinish))
      .then(response => {
        // handle success
        handleSuccessFinishedCase();
        console.log("JE TO NA...", response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const BaseSelect = () => (
    <select
      name="diagnosis"
      value={selectedDiagnosis}
      onChange={({ target }) => {
        console.log("target.value", target.value);
        setSelectedDiagnosis(target.value);
      }}
    >
      <option value="">----</option>
      {diagnosisList.map((diagnosis, index) => (
        <option key={index} value={diagnosis}>
          {diagnosis}
        </option>
      ))}
    </select>
  );
  const isLoadingConditionFn = props => props.loading;

  const SelectWithLoading = withEither(isLoadingConditionFn, LoadingSpin)(
    BaseSelect
  );

  // return <SelectWithLoading loading={loading} />;

  return (
    <>
      <Title level={4}>Guess the Diagnosis</Title>
      <form onSubmit={event => handleFinishCase(event)}>
        <SelectWithLoading loading={loading} />
        <input type="submit" value="Submit diagnosis" disabled={loading} />
      </form>
    </>
  );
};

export default DiagnosisGuessForm;
