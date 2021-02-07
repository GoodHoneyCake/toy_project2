import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { SafeAreaView, View, Text } from "react-native";

class Navbar extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <FontAwesomeIcon icon={faLeaf} color={"blue"} size={32} />
          <Text>Habit Tracker</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});

export default Navbar;
