import React, { Component } from "react";
import { Button, SafeAreaView, TextInput } from "react-native";

class HabitAddForm extends Component {
  render() {
    return (
      <SafeAreaView>
        <TextInput placeholder="Habit"></TextInput>
        <Button>1</Button>
      </SafeAreaView>
    );
  }
}

export default HabitAddForm;
