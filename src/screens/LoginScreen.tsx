import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Colors } from "react-native-paper";
import { useState } from "react";

import { Header } from "~/components/Header";
import { FormInput, FormInputIcon } from "~/components/FormInput";

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  submitButton: {
    marginVertical: 32,
    marginHorizontal: 16,
    backgroundColor: Colors.purple500,
  },
});

const getAutoCompleteValue = (attribute: string) => ({
  autoComplete: attribute,
});

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleLogin = () => {
    console.log(email, password);
  };

  const toggleSecureIcon = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Header title="SpaceCraft" />

      <View style={styles.content}>
        <FormInput
          label="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
          {...getAutoCompleteValue("email")}
        />
        <FormInput
          label="Password"
          value={password}
          secureTextEntry={isVisible}
          onChangeText={(value) => setPassword(value)}
          right={
            <FormInputIcon
              onPress={toggleSecureIcon}
              name={isVisible ? "eye-off" : "eye"}
            />
          }
          {...getAutoCompleteValue("password")}
        />
        <Button
          onPress={handleLogin}
          style={styles.submitButton}
          mode="contained"
        >
          Login
        </Button>
      </View>
    </>
  );
};
