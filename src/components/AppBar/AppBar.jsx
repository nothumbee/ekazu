import React,  {useState} from 'react';
// import LoadPatient from '../Load/LoadPatient';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import * as ROUTES from '../../constants/routes';
import 'antd/dist/antd.css';


const AppBar = () => {

  const [current, setCurrent] = useState('LANDING');

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(
     e.key,
    );
  }


  return (

    <Menu onClick={handleClick} selectedKeys={[current]}  mode="horizontal" theme="dark" >
      <Menu.Item key="LANDING">
        <Link to={ROUTES.LANDING}>Landing</Link>
      </Menu.Item>
      <Menu.Item key="ADMIN">
        <Link to={ROUTES.ADMIN}>ADMIN</Link>
      </Menu.Item>
      <Menu.Item key="STUDENT">
        <Link to={ROUTES.STUDENT}>STUDENT</Link>
      </Menu.Item>
  </Menu>


  );
};

export default withRouter(AppBar);
