import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class Habit extends Component {
  render() {
    return (
      <View style={styles.habitName}>
        <Text>Hello World</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  habitName: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Habit;
