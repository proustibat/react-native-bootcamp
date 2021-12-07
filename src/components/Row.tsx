import { Colors, DataTable } from "react-native-paper";
import * as React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  clickable: { backgroundColor: Colors.red100 },
});

type Props = {
  title: string;
  value: string;
  onPress?: (value: string) => () => void;
};

export const Row = ({ title, value, onPress }: Props) => (
  <DataTable.Row
    key={title}
    onPress={onPress && onPress(value)}
    style={onPress && styles.clickable}
  >
    <DataTable.Cell>{title}</DataTable.Cell>
    <DataTable.Cell>{value}</DataTable.Cell>
  </DataTable.Row>
);
