import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
<<<<<<< HEAD
=======
import 'antd/dist/antd.css';
>>>>>>> feature/student-loading
// import { compose } from 'recompose';
// import { SignUpLink } from '../SignUp';
// import { withFirebase } from '../Firebase';
// import { PasswordForgetLink } from '../Password/Forget';
import * as ROUTES from '../../constants/routes';
<<<<<<< HEAD
=======
import { Alert } from 'antd';
>>>>>>> feature/student-loading

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    {/* <PasswordForgetLink />
    <SignUpLink /> */}
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
<<<<<<< HEAD
  error: null
=======
  error: null,
  message: null
>>>>>>> feature/student-loading
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

<<<<<<< HEAD
=======
  componentDidMount() {
    if (this.props.location.search === '?loginfirst') {
      this.setState({
        message: 'You have to sign in to access this protected area of website.'
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
    console.log('Helllooo', this.props);
  }

>>>>>>> feature/student-loading
  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    sessionStorage.setItem('authUser', true);

    console.log(sessionStorage.getItem('authUser'));
    // this.props.firebase
    //   .doSignInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     this.setState({ ...INITIAL_STATE });
<<<<<<< HEAD
    //     this.props.history.push(ROUTES.HOME);
=======
    this.props.history.push(ROUTES.ADMIN);
>>>>>>> feature/student-loading
    //   })
    //   .catch(error => {
    //     this.setState({ error });
    //   });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
<<<<<<< HEAD
    const { email, password, error } = this.state;
    // const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button
          // disabled={isInvalid}
          type="submit"
        >
          Sign In
        </button>
        {error && <p>{error.message}</p>}
      </form>
=======
    const { email, password, error, message } = this.state;
    // const isInvalid = password === '' || email === '';

    return (
      <>
        {message && (
          <Alert
            type="warning"
            message={message}
            showIcon
            style={{ width: '50%', margin: '0.8em' }}
          />
        )}
        <form onSubmit={this.onSubmit}>
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <button
            // disabled={isInvalid}
            type="submit"
          >
            Sign In
          </button>
          {error && <p>{error.message}</p>}
        </form>
      </>
>>>>>>> feature/student-loading
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
