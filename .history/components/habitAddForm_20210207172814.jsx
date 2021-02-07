import React, { Component, useState } from "react";
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";

class HabitAddForm extends Component {
  onSubmitEditing = () => {
    console.log("test");
  };

  render() {
    const [text, setText] = useState("");
    return (
      <SafeAreaView style={styles.form}>
        <TextInput
          style={styles.title}
          placeholder="오늘의 취미"
          onSubmitEditing={this.onSubmitEditing}
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <TouchableOpacity style={styles.icon} onPress={this.removeEverything}>
          <FontAwesomeIcon icon={faEraser} color={"green"} size={32} />
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
