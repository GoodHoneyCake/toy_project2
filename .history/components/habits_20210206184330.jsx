import React, { Component } from "react";
import { View, Function } from "react-native";
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
        <Function>
          {this.state.habits.map((habit) => {
            <Habit />;
          })}
        </Function>
      </View>
    );
  }
}

export default Habits;
