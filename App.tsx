import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from "expo-constants";
import LoginScreen from "./src/screens/LoginScreen";
import TermsScreen from "./src/screens/TermsScreen";
import FeedScreen from "./src/screens/FeedScreen";

const styles = StyleSheet.create({
  root: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  },
});

const App = () => {
  return (
      <View style={styles.root}>
        {/*<LoginScreen/>*/}
        {/*<TermsScreen/>*/}
        <FeedScreen/>
      </View>
  );
}

export default App;


