import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import "antd/dist/antd.css";
import './index.less';

import * as ROUTES from '../../constants/routes';
import { Alert } from 'antd';
// import { ReactComponent as Blood } from './blood.svg';
import { ReactComponent as Shape } from './shape.svg';

import MorphingBG from './animation.js';

const SignInPage = () => (
  <div>
    <Shape className="scene" />

    {/* <Blood className="blood" /> */}

    <div id="vh">
      <h1 className="title">Přihlášení</h1>
      <SignInForm />
      {/* <PasswordForgetLink />
    <SignUpLink /> */}
    </div>
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
  message: null
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {
    new MorphingBG(document.querySelector('.scene'));

    if (this.props.location.search === '?loginfirst') {
      this.setState({
        message: 'Pro přístup do této sekce se musíte přihlásit'
      });
    } else {
      this.setState({
        message: null
      });
    }

    this.props.history.listen(location => {
      this.setState({
        message: null
      });
    });
  }

  onSubmit = event => {
    event.preventDefault();
    // const { email, password } = this.state;

    sessionStorage.setItem('authUser', true);

    // this.props.firebase
    //   .doSignInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     this.setState({ ...INITIAL_STATE });
    this.props.history.push(ROUTES.ADMIN);
    //   })
    //   .catch(error => {
    //     this.setState({ error });
    //   });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error, message } = this.state;
    // const isInvalid = password === '' || email === '';

    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Emailová adresa"
          />
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Heslo"
          />
          <button
            className="ant-btn ant-btn-primary"
            // disabled={isInvalid}
            type="submit"
          >
            Přihlásit
          </button>
          {error && <p>{error.message}</p>}
        </form>
        {message && (
          <Alert
            type="warning"
            message={message}
            showIcon
            style={{ width: '100%', margin: '0.8em 0' }}
          />
        )}
      </>
    );
  }
}

// const SignInForm = compose(
//   withRouter,
//   withFirebase
// )(SignInFormBase);
const SignInForm = withRouter(SignInFormBase);

export default SignInPage;
export { SignInForm };
