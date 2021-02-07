import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { SafeAreaView, View } from "react-native";

class Navbar extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faLeaf} color={"red"} size={32} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Navbar;
