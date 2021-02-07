import React, { Component, useState } from "react";
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

class HabitAddForm extends Component {
  const = ([text, setText] = useState(""));

  onSubmit = () => {
    console.log("text");
  };

  render() {
    return (
      <SafeAreaView style={styles.form}>
        <TextInput
          style={styles.title}
          placeholder="오늘의 취미"
          onSubmitEditing={this.onSubmit}
        ></TextInput>
        <TouchableOpacity style={styles.icon} onPress={this.onSubmit}>
          <FontAwesomeIcon icon={faFolderPlus} color={"green"} size={32} />
        </TouchableOpacity>
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
