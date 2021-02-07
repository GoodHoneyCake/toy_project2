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
          <Text></Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Navbar;
