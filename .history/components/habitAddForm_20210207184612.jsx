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
  state = {
    data: "",
  };

  onSubmitEditing = () => {
    const { data } = this.state;
    data && this.props.onAdd(this.state.data);
    this.setState({ data: "" });
  };

  onChangeText = (text) => {
    const name = text;
    this.setState({ data: name });
  };

  render() {
    const data = this.state;
    return (
      <SafeAreaView style={styles.form}>
        <TextInput
          style={styles.title}
          placeholder="오늘의 취미"
          onSubmitEditing={this.onSubmitEditing}
          onChangeText={this.onChangeText}
          value={data}
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
