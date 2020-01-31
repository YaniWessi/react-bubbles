import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      Users: {
        username: "",
        password: ""
      }
    };
  }

  handleChange = e => {
    this.setState({
      Users: {
        ...this.state.Users,

        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("/login", this.state.Users)
      .then(res => {
        console.log("response", res);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/BubblePage");
      })
      .catch(err => {
        console.log("error", err);
      });
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            placeholder="Username"
            type="text"
            name="username"
            value={this.state.Users.username}
            onChange={this.handleChange}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={this.state.Users.password}
            onChange={this.handleChange}
          />

          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
