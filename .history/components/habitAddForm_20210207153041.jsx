import React, { Component } from "react";
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

class HabitAddForm extends Component {
  inputRef = React.createRef();

  onSubmit = () => {
    const name = this.inputRef.current;
    console.log(name);
  };

  render() {
    return (
      <SafeAreaView style={styles.form} >
        <TextInputref={this.inputRef}
          style={styles.title}
          placeholder="오늘의 취미"
          onSubmitEditing={this.onSubmit}
        ></TextInputref=>
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
