import React, { Component } from "react";
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

class HabitAddForm extends Component {
  state = {
    name: "",
  };

  onChangeText = (name) => this.setState({ name });

  onSubmitEditing = () => {
    const { name } = this.state;
    name && this.props.onAdd(name);
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
          value={name}
        />
        <Text>{name}</Text>
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
