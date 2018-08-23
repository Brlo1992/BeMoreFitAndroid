import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    col:{ flexDirection: "column", borderColor: "darkgreen", marginBottom: 5, borderWidth: 2 },
    centredRow:{ flexDirection: "row", flex: 1, justifyContent: 'center', marginVertical: 5 },
    label:{ alignSelf:"center", fontWeight: "bold", fontSize: 15 },
    spaceBetweenRow: { flexDirection: "row", flex: 1, justifyContent: 'space-between' },
    bigCell:{ flex: 0.3, marginHorizontal: 5, marginVertical: 5},
});


export default class DaysSetListItem extends Component {
    render() {
        return <View style={styles.col}>
            <View style={styles.centredRow}>
                <Text style={styles.label}>{this.props.name}</Text>
            </View>
            <View style={styles.spaceBetweenRow}>
                <View style={styles.bigCell}>
                    <Button title="Pokaz" color="darkgreen" onPress={this.handleChangeMeal} />
                </View>
                <View style={styles.bigCell}>
                    <Button title="Edytuj" color="darkgreen" onPress={this.handleChangeMeal} />
                </View>
                <View style={styles.bigCell}>
                    <Button title="Usun" color="darkgreen" onPress={this.handleChangeMeal} />
                </View>
            </View>
        </View>
    }
}