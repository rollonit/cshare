import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Woohoo</Text>
            <Text style={styles.titleText}>Woo2</Text>
            <Text style={styles.titleText}>Woo3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        flex: 1,
        color: '#fff',
        fontFamily: 'Oswald',
        fontSize: 34
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#222'
    }
});