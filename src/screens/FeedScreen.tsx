import * as React from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import { Text } from "react-native-paper";
import ContentLoader from "react-content-loader/native";

import { CardItem } from "~/components/CardItem";
import { useStarships } from "~/hooks/useStarships";

const styles = StyleSheet.create({
  root: { flex: 1 },
  list: {
    paddingHorizontal: 24,
    paddingTop: 12,
  },
});

export const FeedScreen = () => {
  const { isLoading, isError, data } = useStarships();

  if (isLoading) {
    return (
      <>
        {Array.from(Array(5)).map((_, i) => (
          <ContentLoader key={i} />
        ))}
      </>
    );
  }

  if (isError) {
    return <Text>Something bad happened…</Text>;
  }

  return (
    <SafeAreaView style={styles.root}>
      <FlatList
        style={styles.list}
        data={data.results}
        renderItem={({ item }) => (
          <CardItem
            {...{
              ...item,
              costInCredits: item.cost_in_credits,
            }}
          />
        )}
        keyExtractor={({ name, model }) => `${name}-${model}`}
      />
    </SafeAreaView>
  );
};
