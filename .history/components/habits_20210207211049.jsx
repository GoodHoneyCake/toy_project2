import React, { Component } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";
class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Habits;
