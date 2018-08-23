import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    ScrollView,
    StyleSheet,
    Picker
} from 'react-native';
import Header from '../Common/Header'
import DayHeader from '../Common/DayHeader'

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: "#FAFAD2" },
    card: { marginBottom: 5, flex: 0.9, marginHorizontal: 20, paddingTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5 },
    genertor: { alignItems: "center" },
    supplies: {marginVertical: 10},
    supply: {fontWeight:"bold", fontSize:15, marginBottom: 5}
});
export default class SupplyGenerator extends Component {
    render() {
        return <View style={styles.container}>
            <Header/>
            <View style={styles.card}>
                <DayHeader title="Generuj listę"/>
                <View style={styles.geneator}>
                    <Text style={{fontWeight:"bold", fontSize:15, marginBottom: 5}}>Jadlospis</Text>
                    <Picker>
                        <Picker.Item label="Jadlospis 1" value="1" />
                        <Picker.Item label="Jadlospis 2" value="2" />
                        <Picker.Item label="Jadlospis 3" value="3" />
                        <Picker.Item label="Jadlospis 4" value="4" />
                        <Picker.Item label="Jadlospis 5" value="5" />
                        <Picker.Item label="Jadlospis 6" value="6" />
                    </Picker>
                    <Text style={{fontWeight:"bold", fontSize:15, marginBottom: 5}}>Od dnia</Text>
                    <Picker>
                        <Picker.Item label="Dzien 1" value="1" />
                        <Picker.Item label="Dzien 2" value="2" />
                        <Picker.Item label="Dzien 3" value="3" />
                        <Picker.Item label="Dzien 4" value="4" />
                        <Picker.Item label="Dzien 5" value="5" />
                        <Picker.Item label="Dzien 6" value="6" />
                    </Picker>
                    <Text style={{fontWeight:"bold", fontSize:15, marginBottom: 5}}>Do dnia</Text>
                    <Picker>
                        <Picker.Item label="Dzien 1" value="1" />
                        <Picker.Item label="Dzien 2" value="2" />
                        <Picker.Item label="Dzien 3" value="3" />
                        <Picker.Item label="Dzien 4" value="4" />
                        <Picker.Item label="Dzien 5" value="5" />
                        <Picker.Item label="Dzien 6" value="6" />
                    </Picker>
                    <Button title="Generuj" color="darkgreen"></Button>
                </View>
                <ScrollView style={styles.supplies}>
                        <Text style={styles.supply}>Pomidor 2 szt.</Text>
                        <Text style={styles.supply}>Pomidor 2 szt.</Text>
                        <Text style={styles.supply}>Pomidor 2 szt.</Text>
                        <Text style={styles.supply}>Pomidor 2 szt.</Text>
                        <Text style={styles.supply}>Pomidor 2 szt.</Text>
                        <Text style={styles.supply}>Pomidor 2 szt.</Text>
                        <Text style={styles.supply}>Pomidor 2 szt.</Text>
                        <Text style={styles.supply}>Pomidor 2 szt.</Text>
                        <Text style={styles.supply}>Pomidor 2 szt.</Text>
                        <Text style={styles.supply}>Pomidor 2 szt.</Text>
                        <Text style={styles.supply}>Pomidor 2 szt.</Text>
                        <Text style={styles.supply}>Pomidor 2 szt.</Text>
                        <Text style={styles.supply}>Pomidor 2 szt.</Text>
                        <Text style={styles.supply}>Pomidor 2 szt.</Text>
                        <Text style={styles.supply}>Pomidor 2 szt.</Text>
                        <Text style={styles.supply}>Pomidor 2 szt.</Text>
                        <Text style={styles.supply}>Pomidor 2 szt.</Text>
                    </ScrollView>
                    <Button title="Zapisz" color="darkgreen"></Button>    
            </View>
        </View>
    }
}
