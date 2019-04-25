import React, { useEffect, useState } from 'react';
import axe from '../Axios';

import { Collapse, Button, List, Typography } from 'antd';

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

  useEffect(loadTemplateList);

  const customPanelStyle = {
    background: 'rgba(3, 169, 244, 0.42)',
    borderRadius: 4,
    marginBottom: 24,
    border: '1px solid rgba(3, 169, 244, 0.42)',
    overflow: 'hidden'
  };

  return (
    <div>
      <Title level={1}>Seznam šablon</Title>
      <Collapse accordion style={{ backgroundColor: 'transparent', border: 0 }}>
        {templateList.map(template => (
          <Panel header={template.diagnosis} style={customPanelStyle}>
            <Title level={2}>{template.diagnosis}</Title>
            <Button
              type="primary"
              // onChange={()=>handleChange(id)}
              // style={{ float: 'right' }}
            >
              Upravit
            </Button>
            {template.generators.map((generator, index) => (
              <>
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

                {/* <ul>
                  {generator.text &&
                    generator.text.map(value => <li>{value}</li>)}
                </ul> */}
              </>
            ))}
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default TemplateList;
