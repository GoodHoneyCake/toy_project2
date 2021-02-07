import React, { Component } from "react";
import { ScrollView, Button, View, StyleSheet } from "react-native";
import Habits from "./habits";
import Navbar from "./navbar";
import HabitAddForm from "./habitAddForm";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@save_habits";

class Main extends Component {
  state = {
    habits: [],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count + 1;
    habits[index].count = count > 999 ? 999 : count;
    const onSave = this.save;
    onSave(habits);
    this.setState({ habits: habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    const onSave = this.save;
    onSave(habits);
    this.setState({ habits: habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    const onSave = this.save;
    onSave(habits);
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
    const onSave = this.save;
    onSave(habits);
    this.setState({ habits });
    alert("카운트 초기화 완료 ♥️");
  };

  componentDidMount() {
    this.retrieveData();
  }

  retrieveData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      jsonValue != null
        ? this.setState({ habits: JSON.parse(jsonValue) })
        : null;
      // console.log(`get ${jsonValue}`);
    } catch (e) {
      alert("저장된 데이터가 없어요 ♥️");
    }
  };

  save = async (name) => {
    try {
      const jsonValue = JSON.stringify(name);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
      // console.log(`save ${jsonValue}`);
    } catch (e) {
      alert("저장에 실패 했어요 ♥️");
    }
  };

  removeEverything = async () => {
    try {
      await AsyncStorage.clear();
      alert("모든 데이터 초기화 완료 재접속 하세요 ♥️");
    } catch (e) {
      alert("오류 ♥️");
    }
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
            onReset={this.handleReset}
          />
        </ScrollView>
        <View style={styles.btns}>
          <Button
            tyle={styles.btn}
            onPress={this.handleReset}
            title="카운트 초기화"
            color="#841584"
          />
          <Button
            tyle={styles.btn}
            onPress={this.removeEverything}
            title="데이터 초기화"
            color="#841554"
          />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  btns: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Main;
