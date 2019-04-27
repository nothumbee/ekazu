import React, { useState } from "react";
import axe from "../Axios";

import { Typography, Card } from "antd";

const { Title, Text } = Typography;

const DiagnosisAddForm = props => {
  const [diagnosis, setDiagnosis] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const objToSend = { definition: diagnosis };
    console.log("objToSend", objToSend);
    axe
      .post("/admin/codelist/diagnosis", JSON.stringify(objToSend))
      .then(response => console.log("response", response))
      .catch(err => console.log("err", err));
  };

  return (
    <>
      <Title level={2}>Přidání diagnózi</Title>
      <Card>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="diagnosis"
            placeholder="Název diagnózi"
            value={diagnosis}
            onChange={({ target }) => setDiagnosis(target.value)}
          />
          <input type="submit" value="Přidat diagnózu" />
        </form>
      </Card>
    </>
  );
};

export default DiagnosisAddForm;
