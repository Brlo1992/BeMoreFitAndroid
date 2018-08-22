import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({    
    headerRow: { borderColor: "darkgreen", marginBottom: 5, borderWidth: 2, flexDirection: "row", paddingTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5 },
    headerText: { fontWeight: "bold", fontSize: 40, marginTop: 5, marginBottom: 5 },
    subheaderText: { fontWeight: "bold", fontSize: 25, marginTop: 5, marginBottom: 5 },
});

const DayHeader = (props) => <View style={{ alignItems: "center" }}>
    <Text style={styles.headerText}>{props.title}</Text>
    <Text style={styles.subheaderText}>{props.subTitle}</Text>
</View>

export default DayHeader;