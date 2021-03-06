import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropsType from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🏳️‍🌈"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Raining like a MF",
        subtitle: "For more info look outside"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no."
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, fucking boring"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist!",
        subtitle: "It's like you have no glasses on."
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dusty",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outside."
    }
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            style={styles.container}
            colors={weatherOptions[condition].gradient || weatherOptions['Drizzle'].gradient}
        >
            <StatusBar varStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={100} color="white" name={weatherOptions[condition].iconName || weatherOptions['Drizzle'].iconName} />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            {/* <View style={{ ...style.halfContainer, ...style.textContainer }}> */}
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    {weatherOptions[condition].title || 'Atmosphere'}
                </Text>
                <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle || 'Look at the sky!!'}
                </Text>
            </View>
        </LinearGradient>
    )
}

Weather.prototype = {
    temp: PropsType.number.isRequired,
    condition: PropsType.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    temp: {
        fontSize: 40,
        color: 'white'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: 300,
        marginBottom: 10
    },
    subtitle: {
        fontWeight: 600,
        color: 'white',
        fontSize: 24
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
});