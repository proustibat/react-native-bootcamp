import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { DataTable } from "react-native-paper";

import { useSwapi } from "~/hooks/useSwapi";
import { Row } from "~/components/Row";
import { RowsWithIncrementalTitle } from "~/components/RowsWithIncrementalTitle";
import { ENDPOINTS } from "~/utils/endpoints";

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 24,
    marginVertical: 24,
  },
});

export const PilotScreen = () => {
  const {
    params: { pilotUrl },
  } = useRoute() as never;

  const reactQueryKey = ENDPOINTS.PILOT?.reactQueryKey || [];
  const { shouldRenderThis, data, isError, isLoading } = useSwapi(pilotUrl, [
    ...reactQueryKey,
    pilotUrl,
  ]);
  if (isError || isLoading || shouldRenderThis) {
    return shouldRenderThis || null;
  }

  const { films, species, vehicles, starships, ...simpleList } = data;

  return (
    <ScrollView style={styles.root}>
      <DataTable>
        {Object.entries(simpleList).map(([feature, value]) => (
          <Row key={feature} title={feature} value={value as string} />
        ))}
        {[
          ["Film", films],
          ["Species", species],
          ["Vehicle", vehicles],
          ["Starship", starships],
        ].map(([entryTitle, list], i) =>
          list.length > 0 ? (
            <RowsWithIncrementalTitle
              key={`entryTitle-${i}`}
              title={entryTitle}
              list={list}
            />
          ) : null
        )}
      </DataTable>
    </ScrollView>
  );
};
