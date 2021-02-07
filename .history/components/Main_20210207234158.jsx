import React, { Component } from "react";
import { ScrollView, Button } from "react-native";
import Habits from "./habits";
import Navbar from "./navbar";
import HabitAddForm from "./habitAddForm";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@save_habits";

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
    const onSave = this.save;
    onSave(habits);
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      habit.count = 0;
      return habit;
    });
    this.setState({ habits });
  };

  ///////////////////////////////

  componentDidMount() {
    this.retrieveData();
  }

  retrieveData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      jsonValue !== null
        ? JSON.parse(this.setState({ habits: jsonValue }))
        : null;
      console.log(`get ${jsonValue}`);
    } catch (e) {
      alert("저장된 데이터가 없어요");
    }
  };

  save = async (name) => {
    try {
      const jsonValue = JSON.stringify(name);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
      console.log(`save ${jsonValue}`);
    } catch (e) {
      alert("저장에 실패 했어요");
    }
  };

  // removeEverything = async () => {
  //   try {
  //     await AsyncStorage.clear();
  //     alert("데이터 초기화");
  //   } catch (e) {
  //     alert("오류");
  //   }
  // };

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
            onReset={this.handleReset}
          />
        </ScrollView>
        <Button
          onPress={this.handleReset}
          title="기록 초기화"
          color="#841584"
        />
      </React.Fragment>
    );
  }
}

export default Main;
