import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import * as ROUTES from '../../constants/routes';
import { ReactComponent as Logo } from './logo.svg';
import anime from 'animejs';

import './AppBar.less';
import 'antd/dist/antd.less';
import { withAuthentication } from '../Session';
import { compose } from 'recompose';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const logoStyles = {
  height: '41px',
  margin: '19px 24px 16px 0',
  float: 'left'
};

anime({
  targets: '.logo path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) {
    return i * 250;
  },
  direction: 'alternate',
  loop: true
});

const AppBar = props => {
  console.log('AUTHORIZED USER', props.authUser);
  const [current, setCurrent] = useState(props.location.pathname);

  props.history.listen(location => setCurrent(location.pathname));

  const handleClick = e => {
    console.log('click ', e);
    // setCurrent(e.key);
  };

  return (
    <div className="inside nav">
      <Link to={ROUTES.LANDING}>
        <Logo className="logo" style={logoStyles} />
      </Link>

      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={{ lineHeight: '64px', float: 'right' }}
      >
        <Menu.Item key={ROUTES.LANDING}>
          <Link to={ROUTES.LANDING}>Úvod</Link>
        </Menu.Item>

        <SubMenu title={'Učitel'}>
          <MenuItemGroup
            title={<span className="submenu-title-wrapper">Vytvořit</span>}
          >
            <Menu.Item key={ROUTES.ADMIN_CREATE_TEMPLATE}>
              <Link to={ROUTES.ADMIN_CREATE_TEMPLATE}>
                <Icon type="plus" />
                Vytvořit šablonu
              </Link>
            </Menu.Item>
            <Menu.Item key={ROUTES.ADMIN_CREATE_DIAGNOSIS}>
              <Link to={ROUTES.ADMIN_CREATE_DIAGNOSIS}>
                <Icon type="plus" />
                Vytvořit diagnózu
              </Link>
            </Menu.Item>
          </MenuItemGroup>

          <MenuItemGroup
            title={<span className="submenu-title-wrapper">Zobrazit</span>}
          >
            <Menu.Item key={ROUTES.ADMIN_SHOW_TEMPLATE_LIST}>
              <Link to={ROUTES.ADMIN_SHOW_TEMPLATE_LIST}>
                <Icon type="ordered-list" />
                Zobrazit seznam šablon
              </Link>
            </Menu.Item>
            <Menu.Item key={ROUTES.ADMIN_SHOW_DIAGNOSIS_LIST}>
              <Link to={ROUTES.ADMIN_SHOW_DIAGNOSIS_LIST}>
                <Icon type="form" />
                Zobrazit seznam diagnóz
              </Link>
            </Menu.Item>
          </MenuItemGroup>

          <MenuItemGroup
            title={<span className="submenu-title-wrapper">Editovat</span>}
          >
            <Menu.Item key={ROUTES.ADMIN_EDIT_TEMPLATE}>
              <Link to={ROUTES.ADMIN_EDIT_TEMPLATE}>
                <Icon type="edit" />
                Upravit šablonu
              </Link>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>

        <Menu.Item key={ROUTES.STUDENT}>
          <Link to={ROUTES.STUDENT}>Student</Link>
        </Menu.Item>

        {!props.authUser ? (
          <Menu.Item key={ROUTES.SIGN_IN}>
            <Link to={ROUTES.SIGN_IN}>
              <Icon type="login" />
              Přihlásit se
            </Link>
          </Menu.Item>
        ) : (
          <Menu.Item
            key={'LOGOUT'}
            onClick={() => sessionStorage.setItem('authUser', false)}
          >
            <Icon type="logout" />
            Odhlásit se
          </Menu.Item>
        )}
      </Menu>
    </div>
  );
};

export default compose(
  withAuthentication,
  withRouter
)(AppBar);
