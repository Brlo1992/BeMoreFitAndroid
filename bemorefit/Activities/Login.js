import React from 'react';
import {
    View,
    Button,
    TextInput,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import httpClient from '../Features/ApiIntegration/HttpClient';
import routes from '../Features/ApiIntegration/Routes';
import ErrorBox from '../Features/Errors/ErrorBox';

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: "#FAFAD2" },
    card: { marginBottom: 5, marginHorizontal: 20, paddingTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5 },
    text: { fontWeight: "bold", fontSize: 15, marginBottom: 5 },
    input: { height: 50 },
    btn: { marginBottom: 5 } //not working
});

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rememberMe: false,
            errors: [],
            password: 'ab',
            username: 'ab'
        }
    }

    showErrors = () => {
        let result = <View></View>;

        console.log(this.state.errors);

        if (this.state.errors.length > 0) {
            result = <ErrorBox errors={this.state.errors} />
        }

        return result;
    }

    handleRegister = () => {
        this.props.navigation.navigate('Register');
    }

    getData = () => {
        let data = {
            username: this.state.username,
            password: this.state.password,
        };

        return data;
    }

    handlePress = async () => {
        console.log("handlePress");

        let response = await httpClient.post(routes.getLoginRoute(), this.getData());

        console.log(response);

        this.handleResponse(response);
    };

    handleResponse = (response) => {
        console.log("handleResponse");

        if (response.isValid === true && response.data.token) {
            this.setState({ errors: [] });

            this.props.navigation.navigate("CurrentDay");
        }
        else {
            console.log(response.messages);
            let messages = response.messages.map(message => { return message.text });
            console.log(messages);
            this.setState({ errors: messages });
        }
    }

    render() {
        let errorBox = this.showErrors();

        return <View style={styles.container}>
            <View style={styles.card}>{errorBox}</View>
            <View style={styles.card}>
                <Text style={styles.text}>Login</Text>
                <TextInput style={styles.input} value={this.state.username} onChangeText={(username) => this.setState({ username })} />
                <Text style={styles.text}>Haslo</Text>
                <TextInput style={styles.input} value={this.state.password} onChangeText={(password) => this.setState({ password })} />
            </View>
            <View style={styles.card}>
                <Button style={styles.btn} title='Zaloguj' onPress={this.handlePress} color="darkgreen" />
            </View>
            <View style={styles.card}>
                <Button style={styles.btn} title='Zarejestruj' onPress={this.handleRegister} color="darkgreen" />
            </View>
        </View>
    }
}