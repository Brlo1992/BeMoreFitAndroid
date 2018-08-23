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
import DaysSetListItem from "../Common/DaysSetListItem";

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: "#FAFAD2" },
    card: { marginBottom: 5, flex: 0.9, marginHorizontal: 20, paddingTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5 },
});
export default class DaysSetList extends Component {
    render() {
        return <View style={styles.container}>
            <Header/>
            <View style={styles.card}>
                <DayHeader title="Jadlospisy" subTitle=""/>
                <ScrollView>
                    <DaysSetListItem name="Jadlospis 1" daysSet=""/>
                    <DaysSetListItem name="Jadlospis 2" daysSet=""/>
                    <DaysSetListItem name="Jadlospis 3" daysSet=""/>
                    <DaysSetListItem name="Jadlospis 4" daysSet=""/>
                    <DaysSetListItem name="Jadlospis 5" daysSet=""/>
                    <DaysSetListItem name="Jadlospis 6" daysSet=""/>
                    <DaysSetListItem name="Jadlospis 7" daysSet=""/>
                </ScrollView>
            </View>
        </View>
    }
}


AppRegistry.registerComponent('CurrentDay', () => CurrentDay);
