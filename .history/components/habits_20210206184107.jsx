import React, { Component } from "react";
import { SafeAreaViewComponent } from "react-native";
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
    return this.state.habits.map((habit) => {
      <Habit />;
    });
  }
}

export default Habits;
