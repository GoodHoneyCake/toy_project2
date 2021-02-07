import React, { Component } from "react";
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEraser, faPen } from "@fortawesome/free-solid-svg-icons";
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
    return (
      <SafeAreaView style={styles.form}>
        <TextInput
          style={styles.title}
          placeholder="오늘의 기록"
          onSubmitEditing={this.onSubmitEditing}
          onChangeText={this.onChangeText}
          defaultValue={this.state.data}
        />
        <TouchableOpacity style={styles.icon} onPress={this.onSubmitEditing}>
          <FontAwesomeIcon icon={faPen} color={"green"} size={32} />
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
