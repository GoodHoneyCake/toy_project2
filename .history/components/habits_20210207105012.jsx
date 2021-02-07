import React, { Component } from "react";
import { ScrollView } from "react-native";
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
      <ScrollView>
        {this.state.habits.map((habit) => (
          <Habit habit={habit} />
        ))}
      </ScrollView>
    );
  }
}

export default Habits;
