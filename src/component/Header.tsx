import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

interface Props {
  name: string;
}

export default class Header extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.judul}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'steelblue',
    paddingLeft: 10,
    justifyContent: 'center',
    height: 50
  },
  judul: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  }
})