import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import Weather from "./Weather";
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = '57298175579d9c49a3a3db65be8b26ea';

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async(lat, lon) => {
    const { data: { main: { temp }, weather } } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    this.setState({ isLoading: false, temp: temp, condition: weather[0].main });
  }
  getLocation = async() => {
    try {
      await Location.getForegroundPermissionsAsync();
      const { coords: { latitude, longitude} } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (e) {
      Alert.alert('cant find you.', 'So sad');
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}

