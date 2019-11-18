import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Layout, Affix, Modal } from 'antd';
import StudentPage from './Student';
import AdminPage from './Admin';
import LandingPage from './Landing';
import SignInPage from '../components/SignIn';

import * as ROUTES from '../constants/routes';

import AppBar from '../components/AppBar';
import FooterCredits from '../components/Footer/Footer';
import './Root.less';

const { Header, Footer, Content } = Layout;

const ScreensRoot = (props) => (
  <BrowserRouter>
    <div>
      <div>{props.children}</div>

      <Layout style={{ minHeight: '100vh', overflowX: 'hidden' }}>
        <Affix style={{ zIndex: '999' }}>
          <Header className="shadow">
            <AppBar />
          </Header>
        </Affix>
        <Content className="content">
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <div className="inside">
              <Switch>
                <Route exact path={ROUTES.LANDING} component={LandingPage} />
                <Route path={ROUTES.STUDENT} component={StudentPage} />
                <Route path={ROUTES.ADMIN} component={AdminPage} />
                <Route
                  path={ROUTES.ADMIN_CREATE_TEMPLATE}
                  component={AdminPage}
                />
                <Route
                  path={ROUTES.ADMIN_CREATE_DIAGNOSIS}
                  component={AdminPage}
                />
                <Route
                  path={ROUTES.ADMIN_SHOW_TEMPLATE_LIST}
                  component={AdminPage}
                />
                <Route
                  path={ROUTES.ADMIN_SHOW_DIAGNOSIS_LIST}
                  component={AdminPage}
                />
                <Route path={ROUTES.SIGN_IN} component={SignInPage} />
              </Switch>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', background: '#fff' }}>
          <FooterCredits />
        </Footer>
      </Layout>
    </div>
  </BrowserRouter>
);

export default ScreensRoot;
