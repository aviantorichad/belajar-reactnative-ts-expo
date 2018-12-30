import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  name: string;
  address: string;
}

interface State {
  isFavorite: boolean;
  backColor: string;
}

export default class RestaurantItem extends Component<Props> {
  state = {
    isFavorite: false
  };

  setFavorite = () => {
    this.setState({
      isFavorite: !this.state.isFavorite
    });
  };

  render() {
    return (
      <TouchableOpacity onPress={this.setFavorite}>
        <View style={styles.container}>
          <Text style={{fontWeight: 'bold'}}>{this.props.name}</Text>
          <Text>{this.props.address}</Text>
          {this.state.isFavorite && <Text>Favorite</Text>}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    justifyContent: "flex-start",
    backgroundColor: 'lightblue'
  }
});
