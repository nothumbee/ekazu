import React, { useState } from 'react';
// import LoadPatient from '../Load/LoadPatient';
import { Link, withRouter } from 'react-router-dom';

import { Menu, Icon } from 'antd';

import * as ROUTES from '../../constants/routes';
import 'antd/dist/antd.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const logoStyles = {
  width: '120px',
  height: '31px',
  background: 'rgba(255,255,255,.2)',
  margin: '16px 24px 16px 0',
  float: 'left'
};

const AppBar = props => {
  const [current, setCurrent] = useState(props.location.pathname);

  props.history.listen(location => setCurrent(location.pathname));

  const handleClick = e => {
    console.log('click ', e);
    // setCurrent(e.key);
  };

  return (
    <>
      <div className="logo" style={logoStyles} />

      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key={ROUTES.LANDING}>
          <Link to={ROUTES.LANDING}>Landing</Link>
        </Menu.Item>

        <SubMenu title={'ADMIN'}>
          <MenuItemGroup
            title={<span className="submenu-title-wrapper">Create</span>}
          >
            <Menu.Item key={ROUTES.ADMIN_CREATE_TEMPLATE}>
              <Link to={ROUTES.ADMIN_CREATE_TEMPLATE}>
                <Icon type="plus" />
                New Template
              </Link>
            </Menu.Item>
            <Menu.Item key={ROUTES.ADMIN_CREATE_DIAGNOSIS}>
              <Link to={ROUTES.ADMIN_CREATE_DIAGNOSIS}>
                <Icon type="plus" />
                New Diagnosis
              </Link>
            </Menu.Item>
          </MenuItemGroup>

          <MenuItemGroup
            title={<span className="submenu-title-wrapper">Show</span>}
          >
            <Menu.Item key={ROUTES.ADMIN_SHOW_TEMPLATE_LIST}>
              <Link to={ROUTES.ADMIN_SHOW_TEMPLATE_LIST}>
                <Icon type="ordered-list" />
                Template List
              </Link>
            </Menu.Item>
            <Menu.Item key={ROUTES.ADMIN_SHOW_DIAGNOSIS_LIST}>
              <Link to={ROUTES.ADMIN_SHOW_DIAGNOSIS_LIST}>
                <Icon type="form" />
                Diagnosis List
              </Link>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>

        <Menu.Item key={ROUTES.STUDENT}>
          <Link to={ROUTES.STUDENT}>STUDENT</Link>
        </Menu.Item>

        <Menu.Item key={ROUTES.SIGN_IN}>
          <Link to={ROUTES.SIGN_IN}>
            <Icon type="login" />
            Sign In
          </Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default withRouter(AppBar);
