import React from 'react';
import {
    View,
    Button,
    TextInput,
    Text,
    StyleSheet,
} from 'react-native';
import httpClient from '../Features/ApiIntegration/HttpClient';
import routes from '../Features/ApiIntegration/Routes';
import ErrorBox from '../Features/Errors/ErrorBox';

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: "#FAFAD2" },
    card: { marginBottom: 5, marginHorizontal: 20, paddingTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5 },
    text: { fontWeight: "bold", fontSize: 15, marginBottom: 5 },
    input: { height: 50 },
    button: { margin: 20 }
});


export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: [],
            username: "abc",
            email: "abc@abc.pl",
            password: "abc",
            repeatedPassword: "abc",
        }
    }

    showErrors = () => {
        let result = <View></View>;

        if (this.state.errors.length > 0)
            result = <ErrorBox errors={this.state.errors} />

        return result;
    }

    getData = () => {
        return {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            repeatedPassword: this.state.repeatedPassword,
        }
    }

    handlePress = async () => {
        console.log(this.getData());

        let response = await httpClient.post(routes.getRegisterRoute(), this.getData());

        this.handleResponse(response);
    }

    handleResponse = (response) => {
        if (response.isValid === true) {
            this.setState({ errors: [] });
            this.props.navigation.navigate("Login");
        }
        else {
            let messages = response.messages.map(message => { return message.text });
            this.setState({ errors: messages });
        }
    }

    handleNavigateLogin = () => {
        this.props.navigation.navigate("Login");
    }

    render() {
        let errorBox = this.showErrors();

        return <View style={styles.container}>
            <View style={styles.card}>{errorBox}</View>
            <View style={styles.card}>
                <Text style={styles.text}>Username</Text>
                <TextInput style={styles.input} value={this.state.username} onChangeText={(username) => this.setState({ username })} />
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.input} value={this.state.email} onChangeText={(email) => this.setState({ email })} />
                <Text style={styles.text}>Haslo</Text>
                <TextInput style={styles.input} value={this.state.password} onChangeText={(password) => this.setState({ password })} />
                <Text style={styles.text}>Powtorz haslo</Text>
                <TextInput style={styles.input} value={this.state.repeatedPassword} onChangeText={(repeatedPassword) => this.setState({ repeatedPassword })} />
            </View>
            <View style={styles.card}>
                <Button style={styles.button} title='Zarejestruj' onPress={this.handlePress} color="darkgreen" />
            </View>
            <View style={styles.card}>
                <Button style={styles.button} title='Zaloguj' onPress={this.handleNavigateLogin} color="darkgreen" />
            </View>
        </View>
    }
}