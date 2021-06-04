import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropsType from 'prop-types';

export default function Weather({ temp }) {
    return (
        <View style={styles.container}>
            <Text>{temp}</Text>
        </View>
    );
}

Weather.prototype = {
    temp: PropsType.number.isRequired,
    condition: PropsType.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});