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
    return (
      <FlatList>
        <View>
          {this.state.habits.map((habit) => {
            <Habit />;
          })}
        </View>
      </FlatList>
    );
  }
}

export default Habits;
