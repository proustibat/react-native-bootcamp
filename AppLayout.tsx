import * as React from "react";
import type { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Colors, Headline, Text } from "react-native-paper";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.grey200,
  },
  headerText: {
    marginTop: Constants.statusBarHeight,
    fontWeight: "bold",
    padding: 20,
  },
  footer: {
    backgroundColor: Colors.grey900,
    padding: 10,
  },
  footerText: {
    color: Colors.grey50,
  },
});

interface Props {
  title: string;
  children?: ReactNode;
  withFooter?: boolean;
}

export const AppLayout = ({ title, children, withFooter = false }: Props) => {
  return (
    <View style={styles.root}>
      <Headline style={styles.headerText}>{title}</Headline>
      {children}
      {withFooter && (
        <View style={styles.footer}>
          <Text style={styles.footerText}>Footer</Text>
        </View>
      )}
    </View>
  );
};
