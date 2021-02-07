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
    ],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits });
  };

  handleDecrement = (habit) => {};

  handleDelete = (habit) => {};

  render() {
    return (
      <ScrollView>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleIncrement}
            onDelete={this.handleIncrement}
          />
        ))}
      </ScrollView>
    );
  }
}

export default Habits;
