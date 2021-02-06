import React, { Component } from "react";
import { SafeAreaView, View } from "react-native";
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
      <SafeAreaView>
        {this.state.habits.map((habit) => {
          <Habit />;
        })}
      </SafeAreaView>
    );
  }
}

export default Habits;
