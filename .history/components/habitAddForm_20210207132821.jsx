import React, { Component } from "react";
import { SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAddressBook,
  faArrowDown,
  faBoxOpen,
  faCartPlus,
  faPlus,
  faPlusCircle,
  faPrescription,
} from "@fortawesome/free-solid-svg-icons";

class HabitAddForm extends Component {
  render() {
    return (
      <SafeAreaView>
        <TextInput placeholder="Habit"></TextInput>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faCartPlus} color={"green"} size={32} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default HabitAddForm;
