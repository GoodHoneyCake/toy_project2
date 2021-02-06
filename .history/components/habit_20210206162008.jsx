import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class Habit extends Component {
  render() {
    return (
      <View>
        <Text style={styles.habitName}>Reading</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  habitName: {},
});
export default Habit;
