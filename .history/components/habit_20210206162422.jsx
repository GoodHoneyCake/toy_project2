import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

class Habit extends Component {
  render() {
    return (
      <View>
        <Text style={styles.habitName}>Reading</Text>
        <Text style={styles.habitCount}>8</Text>
        <Button></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  habitName: {},
  habitCount: {},
});
export default Habit;
