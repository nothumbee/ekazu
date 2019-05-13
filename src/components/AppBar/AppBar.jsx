import React, { useState } from "react";
// import LoadPatient from '../Load/LoadPatient';
import { Link, withRouter } from "react-router-dom";

import { Menu, Icon } from "antd";

import * as ROUTES from "../../constants/routes";
import "antd/dist/antd.css";
import "./AppBar.less";
import { ReactComponent as Logo } from "./logo.svg";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const logoStyles = {
  width: "120px",
  height: "31px",
  margin: "16px 24px 16px 0",
  float: "left"
};

const AppBar = props => {
  const [current, setCurrent] = useState(props.location.pathname);

  props.history.listen(location => setCurrent(location.pathname));

  const handleClick = e => {
    console.log("click ", e);
    // setCurrent(e.key);
  };

  return (
    <div className="inside">
      <Link to={ROUTES.LANDING}>
        <Logo style={logoStyles} />
        {/* <img src={logo} alt="eKazu logo" style={logoStyles} className="logo" /> */}
      </Link>
      {/* <div className="logo" style={logoStyles} /> */}

      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
        style={{ lineHeight: "64px", float: "right" }}
      >
        <Menu.Item key={ROUTES.LANDING}>
          <Link to={ROUTES.LANDING}>Úvod</Link>
        </Menu.Item>

        <SubMenu title={"Učitel"}>
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

        <Menu.Item key={ROUTES.SIGN_IN}>
          <Link to={ROUTES.SIGN_IN}>
            <Icon type="login" />
            Přihlásit se
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default withRouter(AppBar);
