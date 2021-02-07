import React, { Component } from "react";
import { ScrollView } from "react-native";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      {
        id: 1,
        name: "Reading",
        count: 0,
      },
      {
        id: 2,
        name: "Coding",
        count: 0,
      },
      {
        id: 3,
        name: "Cooking",
        count: 0,
      },
      {
        id: 1,
        name: "Reading",
        count: 0,
      },
      {
        id: 2,
        name: "Coding",
        count: 0,
      },
      {
        id: 3,
        name: "Cooking",
        count: 0,
      },
      {
        id: 1,
        name: "Reading",
        count: 0,
      },
      {
        id: 2,
        name: "Coding",
        count: 0,
      },
      {
        id: 3,
        name: "Cooking",
        count: 0,
      },
      {
        id: 1,
        name: "Reading",
        count: 0,
      },
      {
        id: 2,
        name: "Coding",
        count: 0,
      },
      {
        id: 3,
        name: "Cooking",
        count: 0,
      },
    ],
  };
  render() {
    return (
      <ScrollView>
        {this.state.habits.map((habit) => (
          <Habit key={habit.id} habit={habit} />
        ))}
      </ScrollView>
    );
  }
}

export default Habits;
