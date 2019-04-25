import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "antd/dist/antd.css";
// import { compose } from 'recompose';
// import { SignUpLink } from '../SignUp';
// import { withFirebase } from '../Firebase';
// import { PasswordForgetLink } from '../Password/Forget';
import * as ROUTES from "../../constants/routes";
import { Alert } from "antd";

const SignInPage = () => (
  <div>
    <h1>Přihlášení</h1>
    <SignInForm />
    {/* <PasswordForgetLink />
    <SignUpLink /> */}
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
  message: null
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {
    if (this.props.location.search === "?loginfirst") {
      this.setState({
        message: "You have to sign in to access this protected area of website."
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
    console.log("Helllooo", this.props);
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    sessionStorage.setItem("authUser", true);

    console.log(sessionStorage.getItem("authUser"));
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
        {message && (
          <Alert
            type="warning"
            message={message}
            showIcon
            style={{ width: "50%", margin: "0.8em" }}
          />
        )}
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
