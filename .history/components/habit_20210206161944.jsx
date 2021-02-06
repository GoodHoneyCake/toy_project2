import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class Habit extends Component {
  render() {
    return (
      <View>
        <Text style={styles.habitName}>Hello World</Text>
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
