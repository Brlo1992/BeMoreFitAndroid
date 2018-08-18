import React from 'react';
import { View } from 'react-native';
import DayHeader from '../../Common/DayHeader';

export default class Controller extends React.Component {
    hasAnyToken = () => {
        return false;
    }

    redirectAfterTimeout = () => {
        console.log("before timeout");
        setTimeout(function () {
            console.log("timeout");
            this.setState({
                page: true
            });
            if (this.hasAnyToken())
                this.props.navigation.navigate("CurrentDay");
            else
                this.props.navigation.navigate("Login");
        }.bind(this), 5000);
    }

    componentDidMount() {
        this.redirectAfterTimeout();
    }

    render() {
        console.log("render");
        return <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#FAFAD2" }}>
            <DayHeader title="BeMoreFit" subTitle="version 1.0" />
        </View>
    }
}

