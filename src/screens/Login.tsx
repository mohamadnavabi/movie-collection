
import React, { Component } from 'react'
import { SafeAreaView, Text, StatusBar, TextInput, TouchableHighlight, ActivityIndicator } from 'react-native';
import { Styles, Colors } from '../styles/index';
import { connect } from 'react-redux';
import { login } from '../store/user/userAction';
import Button from '../components/Button';
import notify from '../utils/notify';


interface State {
    username: String,
    password: String,
    loading: Boolean
}

class Login extends Component<State> {
    state = {
        username: '',
        password: '',
        loading: false
    }

    usernameChangeText = (username: String) => {
        this.setState({ username });
    }

    passwordChangeText = (password: String) => {
        this.setState({ password });
    }

    submit = async () => {
        const { username, password } = this.state;

        // Check that the username and password are not empty
        if (username.trim() === '' || password.trim() === '') {
            notify('Please Enter Username and Password');
            return;
        }

        // Call Login Action
        this.props.login(username, password);
    }

    render() {
        const { username, password } = this.state;

        return (
            <SafeAreaView style={[Styles.container, Styles.justifyContentCenter]}>
                <StatusBar barStyle='dark-content' backgroundColor='#fff' />

                {/* UserName Input */}
                <TextInput
                    style={Styles.textInput}
                    onChangeText={text => this.usernameChangeText(text)}
                    value={username}
                    placeholder='Enter Your Username'
                />

                {/* Password Input */}
                <TextInput
                    style={Styles.textInput}
                    onChangeText={text => this.passwordChangeText(text)}
                    value={password}
                    placeholder='Enter Your Password'
                    secureTextEntry={true}
                />

                {/* Submit Button */}
                <Button text='login' color={Colors.PRIMARY} onPress={this.submit} />
            </SafeAreaView>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(login(username, password))
});

export default connect(null, mapDispatchToProps)(Login);
