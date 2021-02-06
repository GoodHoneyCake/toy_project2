import React, { Component } from "react";
import { StyleSheet, View, Text, Button, SafeAreaView } from "react-native";

class Habit extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text style={styles.habitName}>Reading</Text>
          <Text style={styles.habitCount}>8</Text>
          <Button title="Press me" />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  habitName: {},
  habitCount: {},
});
export default Habit;
