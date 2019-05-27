import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axe from "../../Axios";

import { Collapse, Button, List, Card } from "antd";

import Title from "antd/lib/typography/Title";
import { ADMIN_EDIT_TEMPLATE } from "../../../constants/routes";
import { ADMIN_DUPLICATE_TEMPLATE } from "../../../constants/routes";

const Panel = Collapse.Panel;

const TemplateList = props => {
  const [templateList, setTemplateList] = useState([]);

  const loadTemplateList = () => {
    if (!templateList.length)
      axe
        .get("/admin/template/list")
        .then(result => {
          setTemplateList(result.data);
        })
        .catch(err => {
          console.log(err);
        });
  };

  useEffect(loadTemplateList, []);

  const editTemplate = id =>
    props.history.push(`${ADMIN_EDIT_TEMPLATE}?id=${id}`);
  const duplicateTemplate = id =>
    props.history.push(`${ADMIN_DUPLICATE_TEMPLATE}?id=${id}`);

  const customPanelStyle = {
    borderRadius: 4,
    marginBottom: 24,
    border: "1px solid #e4e4e4",
    overflow: "hidden"
  };

  return (
    <>
      <Title level={2}>Seznam šablon</Title>
      <Card>
        <Collapse
          accordion
          style={{ backgroundColor: "transparent", border: 0 }}
        >
          {templateList.map((template, index) => (
            <Panel
              key={index}
              header={template.diagnosis}
              style={customPanelStyle}
              extra={
                <Button
                  onClick={() => duplicateTemplate(template.id)}
                  type="primary"
                  site="small"
                >
                  {" "}
                  {/* Nějak nastylovat */} Zkopírovat
                </Button>
              }
            >
              <Title level={2}>{template.diagnosis}</Title>
              <Button onClick={() => editTemplate(template.id)} type="primary">
                Upravit
              </Button>
              {template.generators.map((generator, index) => (
                <React.Fragment key={index}>
                  <Title level={4}> {generator.title}</Title>
                  {generator.exam && `Skryté vyšetření`}
                  {generator.text && (
                    <List
                      bordered
                      dataSource={generator.text}
                      renderItem={item => <List.Item>{item}</List.Item>}
                      style={{ marginBottom: "1.5em" }}
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

export default withRouter(TemplateList);
