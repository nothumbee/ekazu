import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthUserContext from './context';
// import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      const checkUser = () => {
        const authUser = sessionStorage.getItem('authUser');
        if (!condition(authUser)) {
          this.props.history.push(`${ROUTES.SIGN_IN}?loginfirst`);
        }
      };
      checkUser();
      this.listener = setTimeout(checkUser, 10000);
    }

    componentWillUnmount() {
      // clearInterval(this.listener);
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => {
            return condition(authUser) ? <Component {...this.props} /> : null;
          }}
        </AuthUserContext.Consumer>
      );
    }
  }

  return withRouter(WithAuthorization);
};

export default withAuthorization;
