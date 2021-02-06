import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

class Habit extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text style={styles.habitName}>Reading</Text>
          <Text style={styles.habitCount}>8</Text>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faPlusSquare} color={"red"} size={32} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faMinusSquare} color={"blue"} size={32} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  habitName: {},
  habitCount: {},
});
export default Habit;
