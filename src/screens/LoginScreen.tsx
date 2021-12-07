import * as React from "react";
import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Button, Colors, Text } from "react-native-paper";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { FormInput, FormInputIcon } from "~/components/FormInput";
import { AppRoutes } from "~/navigation/AppRoutes";

const styles = StyleSheet.create({
  submitButton: {
    marginVertical: 32,
    marginHorizontal: 16,
  },
  tocText: {
    textAlign: "center",
    fontSize: 14,
    color: Colors.grey500,
  },
});

const getAutoCompleteValue = (attribute: string) => ({
  autoComplete: attribute,
});

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log(email, password);
    navigation.navigate(AppRoutes.STARSHIPS_FEED_SCREEN as never);
  };

  const toggleSecureIcon = () => {
    setIsVisible(!isVisible);
  };

  const navigateToTerms = () => {
    navigation.navigate(AppRoutes.TERMS_SCREEN as never);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <ScrollView>
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

        <TouchableOpacity onPress={navigateToTerms}>
          <Text style={styles.tocText}>
            by login you accept the Terms and Conditions.
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
};
