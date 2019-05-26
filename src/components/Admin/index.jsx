import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Icon, Tabs } from "antd";
import * as ROUTES from "../../constants/routes";

const { Title } = Typography;

const TabPane = Tabs.TabPane;

const AdminHome = () => {
  return (
    <div>
      <Title level={2}>Učitelská administrace</Title>
      <p>
        Vítejte v učitelské administraci kde můžete spravovat šablony a diagnózy
      </p>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Šablony" key="1">
          <div>
            <Link to={ROUTES.ADMIN_CREATE_TEMPLATE}>
              <Button type="primary">
                <Icon type="plus" />
                Vytvořit šablonu
              </Button>
            </Link>
          </div>
          <Link to={ROUTES.ADMIN_SHOW_TEMPLATE_LIST}>
            <Button type="primary">
              <Icon type="file-text" /> Zobrazit seznam šablon
            </Button>
          </Link>
        </TabPane>
        <TabPane tab="Diagnózy" key="2">
          <div>
            <Link to={ROUTES.ADMIN_CREATE_DIAGNOSIS}>
              <Button type="primary">
                <Icon type="plus" />
                Vytvořit diagnózu
              </Button>
            </Link>
          </div>
          <Link to={ROUTES.ADMIN_SHOW_DIAGNOSIS_LIST}>
            <Button type="primary">
              <Icon type="database" /> Zobrazit seznam diagnóz
            </Button>
          </Link>
        </TabPane>
      </Tabs>
    </div>
  );
};

//nevim ffdfdfd
export default AdminHome;
