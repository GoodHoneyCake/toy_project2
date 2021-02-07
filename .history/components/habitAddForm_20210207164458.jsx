import React, { Component } from "react";
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Main from "./main";

const STORAGE_KEY = "@save_name";

class HabitAddForm extends Component {
  state = {
    text: "",
    name: "",
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
      <SafeAreaView style={styles.form}>
        <TextInput
          style={styles.title}
          placeholder="오늘의 취미"
          onSubmitEditing={this.onSubmitEditing}
          onChangeText={this.onChangeText}
          value={text}
        />
        <TouchableOpacity style={styles.icon} onPress={this.removeEverything}>
          <FontAwesomeIcon icon={faEraser} color={"green"} size={32} />
        </TouchableOpacity>
        <Main name={name} />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default HabitAddForm;
