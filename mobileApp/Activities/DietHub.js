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
import DayListItem from "../Common/DayListItem";
import { createStackNavigator } from 'react-navigation';


const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: "#FAFAD2" },
    card: { marginBottom: 5, flex: 0.9, marginHorizontal: 20, paddingTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5 },
    hubSection: {marginTop:5, marginBottom:5},
    centredRow:{ flexDirection: "row", flex: 1, justifyContent: 'center', marginBottom:10 },
    label:{ alignSelf:"center", fontWeight: "bold", fontSize: 25 },
});

export default class DaysSet extends Component {
    render() {
        return <View style={styles.container}>
            <Header/>
            <View style={styles.card}>
                <DayHeader title="Dieta" subTitle=""/>
                <View>
                    <View>
                        <Text style={styles.label}>Dni</Text>
                    </View>
                    <View style={styles.hubSection}>
                        <Button title="Obecny dzien" color="darkgreen" onPress={() => this.props.navigation.navigate("CurrentDay")}/>
                    </View>
                    <View style={styles.hubSection}>
                        <Button title="Nowy dzien" color="darkgreen" onPress={() => this.props.navigation.navigate("DaysSetList")}/>
                    </View>
                    <View style={styles.hubSection}>
                        <Button title="Przeglądaj" color="darkgreen" onPress={() => this.props.navigation.navigate("DaysSetList")}/>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.label}>Jadlospisy</Text>
                    </View>
                    <View style={styles.hubSection}>
                        <Button title="Nowy jadlospis" color="darkgreen" onPress={() => this.props.navigation.navigate("DaysSet")} />
                    </View>
                    <View style={styles.hubSection}>
                        <Button title="Przeglądaj" color="darkgreen" onPress={() => this.props.navigation.navigate("DaysSetList")}/>
                    </View>
                </View>                
                <View>
                    <View>
                        <Text style={styles.label}>Listy zakupow</Text>
                    </View>
                    <View style={styles.hubSection}>
                        <Button title="Generuj listę" color="darkgreen" onPress={() => this.props.navigation.navigate("SupplyGenerator")}/>
                    </View>
                    <View style={styles.hubSection}>
                        <Button  title="Przeglądaj" color="darkgreen" onPress={() => this.props.navigation.navigate("DaysSetList")}/>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.label}>Ustawienia</Text>
                    </View>
                    <View style={styles.hubSection}>
                        <Button title="Zarządzaj" color="darkgreen" onPress={() => this.props.navigation.navigate("DaysSetList")}/>
                    </View>
                </View>
            </View>
        </View>
    }
}


AppRegistry.registerComponent('CurrentDay', () => CurrentDay);
