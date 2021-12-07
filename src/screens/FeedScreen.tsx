import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Snackbar } from "react-native-paper";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { CardItem } from "~/components/CardItem";
import { AppRoutes } from "~/navigation/AppRoutes";
import { useSwapi } from "~/hooks/useSwapi";
import { ENDPOINTS } from "~/utils/endpoints";

const styles = StyleSheet.create({
  root: { flex: 1 },
  list: {
    paddingHorizontal: 24,
    paddingTop: 12,
    zIndex: 10,
  },
  snackBar: {
    zIndex: 20,
    position: "absolute",
    top: 0,
  },
});

export const FeedScreen = () => {
  const navigation = useNavigation();
  const [spaceshipBought, setSpaceshipBought] = useState<number | null>(null);
  const url = ENDPOINTS.STARSHIPS?.url;
  const reactQueryKey = ENDPOINTS.STARSHIPS?.reactQueryKey;
  const { shouldRenderThis, isLoading, isError, data } = useSwapi(
    url,
    reactQueryKey
  );

  if (isError || isLoading || shouldRenderThis) {
    return shouldRenderThis || null;
  }

  const goToDetails = (urlStarship: string) => {
    navigation.navigate(
      AppRoutes.STARSHIP_DETAILS_SCREEN as never,
      {
        url: urlStarship,
      } as never
    );
  };

  const handleBuyAction = (price: number) => {
    setSpaceshipBought(price);
  };

  return (
    <SafeAreaView style={styles.root}>
      <FlatList
        style={styles.list}
        data={data.results}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => goToDetails(item.url)}>
            <CardItem
              {...{
                ...item,
                costInCredits: item.cost_in_credits,
                handleBuyAction,
              }}
            />
          </TouchableOpacity>
        )}
        keyExtractor={({ name, model }) => `${name}-${model}`}
      />
      <Snackbar
        wrapperStyle={styles.snackBar}
        visible={Boolean(spaceshipBought)}
        duration={3000}
        onDismiss={() => setSpaceshipBought(null)}
      >
        {spaceshipBought}
      </Snackbar>
    </SafeAreaView>
  );
};
