import React, { Component } from "react";
import {} from "react-native";
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
      <React.Fragment>
        {this.state.habits.map((habit) => {
          <Habit />;
        })}
      </React.Fragment>
    );
  }
}

export default Habits;
