import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({    
    headerBar: { flex: 0.1, backgroundColor: 'darkgreen', flexDirection: "column", justifyContent: "flex-end" },
    headerText: { fontWeight: "bold", fontSize: 40, marginTop: 20, marginBottom: 20 },
});

const Header = () => <View style={styles.headerBar}>
    <View style={styles.headerRow}></View>
</View>

export default Header;