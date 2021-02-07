import React, { Component } from "react";
import { SafeAreaView, TextInput } from "react-native";

class HabitAddForm extends Component {
  render() {
    return (
      <SafeAreaView>
        <TextInput placeholder="Habit"></TextInput>
      </SafeAreaView>
    );
  }
}

export default HabitAddForm;
