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
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: "#FAFAD2" },
    card: { marginBottom: 5, flex: 0.9, marginHorizontal: 20, paddingTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5 },
});

export default class CurrentDay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gestureName: 'none',
            day: "Dzien 12",
            daysSet: "Jadlospis 3",
            dayInfo: {
                nextMeal: "Kurczak pod serem mozzarella",
                nextMealTime: "18:30",
                spacesBetweenMeals: "3.5h"
            },
            meals: [

            ]
        }
    }

    getMeals = () => {
        // const meals = this.state.meals.map((meal,))
        return <ScrollView>
            <UsedMealListItem />
            <UsedMealListItem />
            <MealListItem />
            <MealListItem />
            <MealListItem />

        </ScrollView>
    }

    onSwipe(gestureName, gestureState) {
        const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
        this.setState({ gestureName: gestureName });
        switch (gestureName) {
            case SWIPE_UP:
                this.props.navigation.navigate("DaysSet");
                break;
            case SWIPE_DOWN:
                this.props.navigation.navigate("DaysSetList");
                break;
            case SWIPE_LEFT:
                this.props.navigation.navigate("DietHub");
                break;
            case SWIPE_RIGHT:
                this.props.navigation.navigate("Login");
                break;
        }
    }

    render() {
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };

        return <GestureRecognizer
            onSwipe={(direction, state) => this.onSwipe(direction, state)}
            config={config}
            style={{
                flex: 1,
                backgroundColor: this.state.backgroundColor
            }}
        >
            <View style={styles.container}>
                <Header />
                <View style={styles.card}>
                    <DayHeader title={this.state.day} subTitle={this.state.daysSet} />
                    <DayInfo info={this.state.dayInfo} />

                </View>
            </View>
        </GestureRecognizer>
    }
}


AppRegistry.registerComponent('CurrentDay', () => CurrentDay);
