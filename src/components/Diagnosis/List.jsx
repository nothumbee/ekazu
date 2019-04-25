import React, { useEffect, useState } from 'react';
import axe from '../Axios';

import { Table } from 'antd';
import Title from 'antd/lib/typography/Title';

const DiagnosisList = () => {
  const [diagnosisList, setDiagnosisList] = useState([]);

  const loadDiagnosisList = () => {
    if (!diagnosisList.length)
      axe
        .get('/admin/codelist/diagnosis')
        .then(result => {
          setDiagnosisList(result.data);
        })
        .catch(err => {
          console.log(err);
        });
  };

  useEffect(loadDiagnosisList, [diagnosisList]);

  const dataSource = diagnosisList.map((diagnosis, index) => {
    console.log('diagnosis', diagnosis);
    return {
      key: index,
      ...diagnosis
    };
  });

  const columns = Object.keys(diagnosisList[0] ? diagnosisList[0] : []).map(
    key => ({
      title: key,
      dataIndex: key,
      key: key
    })
  );

  console.log('dataSource :', dataSource);

  return (
    <div>
      <Title level={2}>Seznam diagnóz</Title>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default DiagnosisList;
