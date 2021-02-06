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
      <SafeAreaView style={styles.li}>
        <View>
          <Text>Reading</Text>
        </View>
        <View>
          <Text>8</Text>
        </View>

        <TouchableOpacity>
          <FontAwesomeIcon icon={faPlusSquare} color={"#cfd159"} size={32} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faMinusSquare} color={"#cfd159"} size={32} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faTrash} color={"#aa3446"} size={32} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  li: { flex: 1, flexDirection: "row" },
});
export default Habit;
