import React, { useEffect, useState } from 'react';
import axe from '../../Axios';

import { Collapse, Button, List, Card } from 'antd';

import Title from 'antd/lib/typography/Title';

const Panel = Collapse.Panel;

const TemplateList = () => {
  const [templateList, setTemplateList] = useState([]);

  const loadTemplateList = () => {
    if (!templateList.length)
      axe
        .get('/admin/template/list')
        .then(result => {
          setTemplateList(result.data);
        })
        .catch(err => {
          console.log(err);
        });
  };

  useEffect(loadTemplateList, []);

  const customPanelStyle = {
    borderRadius: 4,
    marginBottom: 24,
    border: '1px solid #e4e4e4',
    overflow: 'hidden'
  };

  return (
    <>
      <Title level={2}>Seznam šablon</Title>
      <Card>
        <Collapse
          accordion
          style={{ backgroundColor: 'transparent', border: 0 }}
        >
          {templateList.map((template, index) => (
            <Panel
              key={index}
              header={template.diagnosis}
              style={customPanelStyle}
            >
              <Title level={2}>{template.diagnosis}</Title>
              <Button type="primary">Upravit</Button>
              {template.generators.map((generator, index) => (
                <React.Fragment key={index}>
                  <Title level={4}> {generator.title}</Title>
                  {console.log('generator.text :', generator.text)}

                  {generator.text && (
                    <List
                      bordered
                      dataSource={generator.text}
                      renderItem={item => <List.Item>{item}</List.Item>}
                      style={{ marginBottom: '1.5em' }}
                    />
                  )}
                </React.Fragment>
              ))}
            </Panel>
          ))}
        </Collapse>
      </Card>
    </>
  );
};

export default TemplateList;
