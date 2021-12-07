import * as React from "react";
import type { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Appbar, Colors, Text } from "react-native-paper";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.grey200,
    marginTop: Constants.statusBarHeight,
  },
  footer: {
    backgroundColor: Colors.grey900,
    padding: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    padding: 16,
    color: Colors.grey50,
    backgroundColor: Colors.grey800,
    textAlign: "center",
    width: "100%",
  },
});

interface Props {
  title?: string;
  children?: ReactNode;
  withFooter?: boolean;
}

export const AppLayout = ({ title, children, withFooter = false }: Props) => {
  return (
    <View style={styles.root}>
      {title && (
        <Appbar.Header>
          <Appbar.Content title={title} />
        </Appbar.Header>
      )}
      {children}
      {withFooter && (
        <View style={styles.footer}>
          <Text style={styles.footerText}>Footer</Text>
        </View>
      )}
    </View>
  );
};
