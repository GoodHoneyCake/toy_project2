import React, { Component } from "react";
import { View } from "react-native";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      {
        name: "Reading",
        count: 0,
      },
      {
        name: "Coding",
        count: 0,
      },
      {
        name: "Cooking",
        count: 0,
      },
    ],
  };
  render() {
    return (
      <View>
        <Text>this.state.habits.map((habit) => {<Habit />})</Text>
      </View>
    );
  }
}

export default Habits;
