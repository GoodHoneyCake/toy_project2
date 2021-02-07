import React, { Component } from "react";
import { SafeAreaView, ScrollView, Button } from "react-native";
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

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  handleReset = (habit) => {
    this.props.onReset(habit);
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
              onReset={this.handleReset}
            />
          ))}
        </ScrollView>
        <Button onPress={this.props.onReset} title="초기화" color="#841584" />
      </SafeAreaView>
    );
  }
}

export default Habits;
