import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,

} from "react-native";
import RegisterButton from "./RegisterButton";
import MyAlert from "./MyAlert";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const LoginScreen = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  const handleLogin = async () => {
    if (login === "" || password === "") {
      return;
    } else if (login.trim() === "" || password.trim() === "") {
      return;
    }
    const data = {
      login: login,
      password: password,
    };

    try {
      const response = await fetch("http://10.0.1.48:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (responseData.status === "error") {
        setShowAlert(true);
      } else {
        navigation.navigate("adminScreen");
      }
    } catch (error) {
      console.error(error);
    }
    // do something to handle login
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inner}>
        <Text style={styles.header}>Logowanie</Text>
        <TextInput
          style={styles.input}
          placeholder="Login"
          value={login}
          onChangeText={setLogin}
        />
        <TextInput
          style={styles.input}
          placeholder="Hasło"
          value={password}
          onChangeText={setPassword}
        />

        <RegisterButton
          click={handleLogin}
          color="grey"
          text="Zarejestruj się"
        />
        {showAlert && (
          <MyAlert
            message="UŻYTKOWNIK JUŻ ISTNIEJE!!"
            change={handleCloseAlert}
          />
        )}
      </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = {
  container: {
    flex: 1,
    
  },
  inner:{
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
};

export default LoginScreen;
