import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    info: {borderColor: "darkgreen", marginBottom: 5, borderWidth: 2},
    centredRow:{ flexDirection: "row", flex: 1, justifyContent: 'center'},
    label:{ alignSelf:"center", fontWeight: "bold", fontSize: 15, marginTop: 5, marginBottom: 5  },
});

export default class DayInfo extends Component {
    render() {
        return <View> 
            <View style={{marginBottom: 5, flexDirection: "column", paddingTop: 5, paddingBottom: 5}}>
                    <Text style={styles.label}>{this.props.info.nextMeal}</Text>
                    <Text style={styles.label}>Posilek o godzinie: {this.props.info.nextMealTime}</Text>
                    <Text style={styles.label}>Przerwy miedzy posilkami: {this.props.info.spacesBetweenMeals}</Text>
            </View>
        </View>
    }
}