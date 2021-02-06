import React, { Component } from "react";
import { FlatList, View } from "react-native";
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
    <View>
      <FlatList data={state.habits} />
    </View>;
  }
}

export default Habits;
