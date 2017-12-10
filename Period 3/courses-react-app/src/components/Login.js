import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { setAccessToken } from './reducer';
import cx from 'classnames';

const LoginQuery = gql`
  mutation logIn($user: LoginInput!) {
    logIn(input: $user) {
      access_token      
    }
  }
`;

const withMutation = graphql(LoginQuery, {
    props: ({ mutate }) => ({
        loginUser: user => mutate({
            variables: { user },
        }),
    }),
});

const mapDispatchToProp = (dispatch, ownProps) => ({
    login: (username, password) => {
        ownProps
            .loginUser(input)
            .then(response => {
                dispatch(setAccessToken(response.data.accessToken));
            }, err => {
                console.log(err);
            });
    }
});

class LoginForm extends Component {

    onSubmit = (event) => {
        event.preventDefault();
        let {loading, login} = this.props;
        if (loading) return false;
        let username = this.usernameInput.value;
        let password = this.passwordInput.value;
        login({username, password});
    }

    render() {
        let { data } = this.props;
        return (
            <div className="auth-form">

                <form name="loginForm" onSubmit={this.onSubmit}>
                    <div className="form-title">
                        Login
                    </div>

                    { data.error && <div className="form-error-message">{data.error.message}</div> }

                    <div className="form-group-container">
                        <div className="form-group">
                            <input type="text"
                                   name="username"
                                   ref={input => this.usernameInput = input}
                                   required />
                            <label>Email or Phone</label>
                        </div>

                        <div className="form-group">
                            <input type="password"
                                   name="password"
                                   ref={input => this.passwordInput = input}
                                   required />
                            <label>Password</label>
                        </div>

                    </div>

                    <input type="submit" value='Login' className={cx({
                        inactive: data.loading
                    })} />
                    <br/>
                </form>
            </div>
        );
    }
}

export default withMutation(connect(mapStateToProps, mapDispatchToProp)(LoginForm));