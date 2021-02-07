import React, { Component } from "react";
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
  inputRef = React.createRef();

  onSubmitEditing = () => {
    const name = this.inputRef.current;
    name && this.props.onAdd(name);
    console.log("test");
  };

  render() {
    return (
      <SafeAreaView style={styles.form}>
        <TextInput
          style={styles.title}
          placeholder="오늘의 취미"
          onSubmitEditing={this.onSubmitEditing}
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
