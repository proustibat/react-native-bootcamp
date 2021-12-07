import * as React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useSwapi } from "~/hooks/useSwapi";
import { AppRoutes } from "~/navigation/AppRoutes";
import { Row } from "~/components/Row";
import type { DataList } from "~/utils/rendering";
import { renderDataList } from "~/utils/rendering";
import { ENDPOINTS } from "~/utils/endpoints";

const styles = StyleSheet.create({
  root: { flex: 1 },
});

export const DetailsScreen = () => {
  const navigation = useNavigation();

  const {
    params: { url },
  } = useRoute() as never;

  const reactQueryKey = ENDPOINTS.STARSHIP?.reactQueryKey || [];
  const { shouldRenderThis, data, isError, isLoading } = useSwapi(url, [
    ...reactQueryKey,
    url,
  ]);
  if (isError || isLoading || shouldRenderThis) {
    return shouldRenderThis || null;
  }

  const onPilotPress = (pilotUrl: string) => () => {
    navigation.navigate(
      AppRoutes.PILOT_SCREEN as never,
      {
        pilotUrl,
      } as never
    );
  };

  const { films, pilots, ...simpleList } = data;

  const list: DataList = [
    ["Film", films],
    ["Pilot", pilots, onPilotPress],
  ];

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Feature</DataTable.Title>
            <DataTable.Title>Value</DataTable.Title>
          </DataTable.Header>

          {Object.entries(simpleList).map(([feature, value]) => (
            <Row key={feature} title={feature} value={value as string} />
          ))}

          {list.map(renderDataList)}
        </DataTable>
      </ScrollView>
    </SafeAreaView>
  );
};
