import React, { useState } from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";
import { TextInput } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const validateUser = () => {
    console.log(email);
    if (!email.includes("@")) {
      Alert.alert("Please enter a valid email");
    } else if (password.length < 6) {
      Alert.alert("Please enter a valid Password");
    } else {
      navigation.navigate("Profile");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <TextInput
          placeholder="Please Enter Your Email"
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
        />
      </View>
      <View style={styles.childContainer}>
        <TextInput
          placeholder="Please Enter Your Password"
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={text => {
            setPassword(text);
          }}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.childContainer}>
        <Button
          title="go to profileScreen "
          onPress={() => {
            validateUser();
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  childContainer: {
    margin: "5%"
  }
});
export default HomeScreen;
