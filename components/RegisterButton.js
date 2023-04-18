import React from "react";
import { TouchableOpacity, Text } from "react-native";

const RegisterButton = (props) => {
  const handleRegister = () => {
    // do something to handle registration
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.color,
        borderRadius: 5,
        padding: 10,
        width: "100%",
        alignItems: "center",
        marginTop: 10,
      }}
      onPress={props.click}
    >
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    backgroundColor: "gray",
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

export default RegisterButton;
