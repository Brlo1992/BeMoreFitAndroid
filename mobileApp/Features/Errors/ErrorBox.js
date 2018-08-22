import React from 'react';
import {
    Text,
    View
} from 'react-native';

const ErrorBox = (props) => {
    let errors = props.errors.map(error => <Text style={{
        fontWeight: "bold", fontSize: 15, marginTop: 5, marginBottom: 5, color: 'red'
    }}>{error}</Text>)
    
    return <View style={{ alignItems: "center"}}>
        {errors}
    </View>
}

export default ErrorBox;