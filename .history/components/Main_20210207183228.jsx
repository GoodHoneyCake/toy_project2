import React, { Component } from "react";
import { ScrollView } from "react-native";
import Habits from "./habits";
import Navbar from "./navbar";

class Main extends Component {
  state = {
    habits: [],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count + 1;
    habits[index].count = count > 99 ? 99 : count;
    this.setState({ habits: habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits: habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [
      this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ habits });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <ScrollView>
          <Habits
            habits={this.state.habits}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
          />
        </ScrollView>
      </React.Fragment>
    );
  }
}

export default Main;
