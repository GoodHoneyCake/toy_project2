import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Habit extends Component {
  render() {
    return (
      <View style={styles.habit}>
        <Text>Hello World</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  habit: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Habit;
