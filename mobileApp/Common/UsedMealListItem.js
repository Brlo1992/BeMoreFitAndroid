import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    coloredRow: { backgroundColor: "#228b22", borderColor: "darkgreen", marginBottom: 5, borderWidth: 2, flexDirection: "row", paddingTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5 },
    centredRow:{ flexDirection: "row", flex: 1, justifyContent: 'center', marginVertical: 5 },
    label:{ alignSelf:"center", fontWeight: "bold", fontSize: 15 },
});

export default class UsedMealListItem extends Component {
    render() {
        return <View style={styles.coloredRow}>
            <View style={styles.centredRow}>
                <Text style={styles.label}>Brushetta z pieczarkami</Text>
            </View>
        </View>
    }
}