import React, { Component } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Habit from "./habit";

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

  render() {
    return (
        <React.Fragment>
            <HabitAddForm onAdd={this.handleAdd} 
        </React.Fragment>
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
