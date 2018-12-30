import React, { Component } from "react";
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from "react-native";
import Header from "./src/component/Header";
import RestaurantList from "./src/component/RestaurantList";
import axios from "axios";

interface State {
  isLoading: boolean;
  restaurants: any[];
}

export default class App extends Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      isLoading: true,
      restaurants: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get("https://developers.zomato.com/api/v2.1/search?count=100", {
        headers: {
          "user-key": "faf4928eb55db868666b7ca816532aae"
        }
      })
      .then(response => {
        console.log(response.data.restaurants);
        const restaurants = response.data.restaurants.map((item: any) => {
          const restaurant = item.restaurant;

          return {
            id: restaurant.id,
            name: restaurant.name,
            address: restaurant.location.address
          };
        });
        
        this.setState({
          restaurants,
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error);
        Alert.alert(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header name="Daftar Restaurant" />
        {this.state.isLoading && <ActivityIndicator size="large" />}
        <RestaurantList restaurants={this.state.restaurants} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight
  }
});
