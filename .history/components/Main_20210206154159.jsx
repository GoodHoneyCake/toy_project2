import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Habits from "habits";
import Navbar from "navbar";

const STORAGE_KEY = "@save_name";

class Main extends Component {
  state = {
    text: "",
    name: "",
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };
  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };
  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
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
  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  componentDidMount() {
    this.retrieveData();
  }

  retrieveData = async () => {
    try {
      const name = await AsyncStorage.getItem(STORAGE_KEY);

      if (name !== null) {
        this.setState({ name });
      }
    } catch (e) {
      alert("Failed to load name.");
    }
  };

  save = async (name) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, name);
      this.setState({ name });
    } catch (e) {
      alert("Failed to save name.");
    }
  };

  removeEverything = async () => {
    try {
      await AsyncStorage.clear();
      alert("데이터 초기화 ♥️");
    } catch (e) {
      alert("메모는 새로 작성하면 덮어 쓰여요 ♥️");
    }
  };

  onChangeText = (text) => this.setState({ text });

  onSubmitEditing = () => {
    const onSave = this.save;
    const { text } = this.state;

    if (!text) return;

    onSave(text);
    this.setState({ text: "" });
  };

  render() {
    const { text, name } = this.state;
    return (
      <React.Fragment>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            value={text}
            placeholder="오늘의 한 줄"
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitEditing}
          />
          <Text style={styles.text}>{name}</Text>
          <TouchableOpacity
            onPress={this.removeEverything}
            style={styles.button}
          >
            <Text style={styles.buttonText}>초기화</Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    padding: 10,
    backgroundColor: "#fff",
  },
  input: {
    padding: 15,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    margin: 10,
  },
  button: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fc5f5f",
  },
  buttonText: {
    fontSize: 14,
    color: "#fff",
  },
});

export default Main;
