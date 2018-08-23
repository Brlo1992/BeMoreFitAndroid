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
    bigCell:{ flex: 0.35, marginHorizontal: 5, marginVertical: 5},
    smallCell:{ flex: 0.15, marginHorizontal: 5, marginVertical: 5 }
});

export default class MealListItem extends Component {
    render() {
        return <View style={styles.col}>
            <View style={styles.centredRow}>
                <Text style={styles.label}>Mozarella na ostro</Text>
            </View>
            <View style={styles.spaceBetweenRow}>
                <View style={styles.bigCell}>
                    <Button title="Przepis" color="darkgreen" onPress={this.handleChangeMeal} />
                </View>
                <View style={styles.bigCell}>
                    <Button title="Zmien" color="darkgreen" onPress={this.handleChangeMeal} />
                </View>
                <View style={styles.smallCell}>
                    <Button title="/\" color="green" onPress={this.handleChangeMeal} />
                </View>
                <View style={styles.smallCell}>
                    <Button title="\/" color="green" onPress={this.handleChangeMeal} />
                </View>
            </View>
        </View>
    }
}