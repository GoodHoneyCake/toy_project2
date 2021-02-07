import React, { Component } from "react";
import { Button, ScrollView } from "react-native";
import Habits from "./habits";
import Navbar from "./navbar";
import HabitAddForm from "./habitAddForm";

class Main extends Component {
  state = {
    habits: [
      {
        id: 1,
        name: "책 읽기",
        count: 0,
      },
      {
        id: 2,
        name: "코딩",
        count: 0,
      },
      {
        id: 3,
        name: "요리",
        count: 0,
      },
    ],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count + 1;
    habits[index].count = count > 999 ? 999 : count;
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
      ...this.state.habits,
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
        <HabitAddForm onAdd={this.handleAdd} />
        <ScrollView>
          <Habits
            habits={this.state.habits}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
          />
        </ScrollView>
        <Button title="초기화" color="#841584" />
      </React.Fragment>
    );
  }
}

export default Main;
