import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMinusSquare,
  faPlusSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

class Habit extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>Reading</Text>
          <Text>8</Text>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faPlusSquare} color={"#cfd159"} size={32} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faMinusSquare} color={"#cfd159"} size={32} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faTrash} color={"#aa3446"} size={32} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({});
export default Habit;
