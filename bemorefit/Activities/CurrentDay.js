'use strict'

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    ScrollView,
    StyleSheet
} from 'react-native';
import MealListItem from "../Common/MealListItem";
import UsedMealListItem from "../Common/UsedMealListItem";
import DayHeader from "../Common/DayHeader";
import Header from "../Common/Header";
import DayInfo from "../Common/DayInfo";
import GestureRecognizer from 'react-native-swipe-gestures';
import { createStackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: "#FAFAD2" },
    card: { marginBottom: 5, flex: 0.9, marginHorizontal: 20, paddingTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5 },
});

const swipeConfig = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
};

export default class CurrentDay extends Component {
    render() {
        return <View style={styles.container}>
            <Header />
            <View style={styles.card}>
                <DayHeader title="Dzien 11" subTitle="Jadlospis 2" />
                <DayInfo />
                <ScrollView>
                    <UsedMealListItem />
                    <UsedMealListItem />
                    <MealListItem />
                    <MealListItem />
                    <MealListItem />
                </ScrollView>
            </View>
        </View>
    }
}


AppRegistry.registerComponent('CurrentDay', () => CurrentDay);
