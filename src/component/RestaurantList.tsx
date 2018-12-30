import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import RestaurantItem from "./RestaurantItem";

interface State {}

interface Restaurant {
  id: number;
  name: string;
  address: string;
}

interface Props {
  restaurants: Restaurant[];
}

export default class RestaurantList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.restaurants.map(restaurant => {
          return <RestaurantItem key={restaurant.id} name={restaurant.name} address={restaurant.address} />;
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});
