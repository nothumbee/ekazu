import React from 'react';

import AuthUserContext from './context';
// import { withFirebase } from '../Firebase';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    state = {
      authUser: null
    };

    // the idea is to setInterval and check in localStorage if is still logged in
    componentDidMount() {
      // this.setState({ authUser: null });

      const checkUser = () => {
        const authUser = sessionStorage.getItem('authUser');

        if (this.state.authUser !== authUser)
          authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null });

        console.log(authUser);
      };

      checkUser();
      this.listener = setInterval(checkUser, 5000);

      // console.log(this.listener);
      // this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      //   authUser
      //     ? this.setState({ authUser })
      //     : this.setState({ authUser: null });
      // });
    }

    componentWillUnmount() {
      clearInterval(this.listener);
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} authUser={this.state.authUser} />
        </AuthUserContext.Provider>
      );
    }
  }
  return WithAuthentication;
  // return withFirebase(WithAuthentication);
};
export default withAuthentication;
