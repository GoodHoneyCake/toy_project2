import React, { Component } from "react";
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEraser, faPen } from "@fortawesome/free-solid-svg-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@save_name";
class HabitAddForm extends Component {
  state = {
    data: "",
    name: "",
  };

  componentDidMount() {
    this.retrieveData();
  }

  retrieveData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      return jsonValue !== null ? JSON.parse(this.setState({ jsonValue })):null
      }catch (e) {
        alert("불러오기 실패");
    } 
    }
  };

  save = async (name) => {
    try {
      const jsonValue = JSON.stringify(name);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
      this.setState({ name });
    } catch (e) {
      alert("저장 실패");
    }
  };

  removeEverything = async () => {
    try {
      await AsyncStorage.clear();
      alert("데이터 초기화");
    } catch (e) {
      alert("오류");
    }
  };

  onSubmitEditing = () => {
    const onSave = this.save;
    const { data } = this.state;
    data && this.props.onAdd(this.state.data);
    onSave(data);
    this.setState({ data: "" });
  };

  onChangeText = (text) => {
    const name = text;
    this.setState({ data: name });
  };

  render() {
    const { data, name } = this.state;
    return (
      <SafeAreaView style={styles.form}>
        <TextInput
          style={styles.title}
          value={data}
          placeholder="오늘의 기록"
          onSubmitEditing={this.onSubmitEditing}
          onChangeText={this.onChangeText}
          defaultValue={this.state.data}
        />
        <TouchableOpacity style={styles.icon} onPress={this.onSubmitEditing}>
          <FontAwesomeIcon icon={faPen} color={"green"} size={32} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={this.removeEverything}>
          <FontAwesomeIcon icon={faEraser} color={"red"} size={32} />
        </TouchableOpacity>
        <Text>{name}</Text>
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
