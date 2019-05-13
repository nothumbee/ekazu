import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Icon } from 'antd';
import * as ROUTES from '../../constants/routes';

const { Title } = Typography;

const AdminHome = () => {
  return (
    <div>
      <Title level={2}>This is your home my maan </Title>
      <div>
        <Link to={ROUTES.ADMIN_CREATE_TEMPLATE}>
          <Button type="primary">
            <Icon type="plus" />
            Vytvořit šablonu
          </Button>
        </Link>
      </div>
      <div>
        <Link to={ROUTES.ADMIN_CREATE_DIAGNOSIS}>
          <Button type="primary">
            <Icon type="plus" />
            Vytvořit diagnózu
          </Button>
        </Link>
      </div>
      <div>
        <Link to={ROUTES.ADMIN_SHOW_TEMPLATE_LIST}>
          <Button type="primary">
            <Icon type="file-text" /> Zobrazit seznam šablon
          </Button>
        </Link>
      </div>
      <div>
        <Link to={ROUTES.ADMIN_SHOW_DIAGNOSIS_LIST}>
          <Button type="primary">
            <Icon type="database" /> Zobrazit seznam diagnóz
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AdminHome;
