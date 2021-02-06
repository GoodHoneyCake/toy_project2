import React, { Component } from "react";
import { FlatList, SafeAreaView } from "react-native";
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
    {
      this.state.habits.map((habit) => {
        return <Habit />;
      });
    }
  }
}

export default Habits;
