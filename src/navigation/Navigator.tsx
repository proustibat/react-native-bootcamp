import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AppRoutes } from "~/navigation/AppRoutes";
import { LoginScreen } from "~/screens/LoginScreen";
import { TermsScreen } from "~/screens/TermsScreen";
import { FeedScreen } from "~/screens/FeedScreen";
import { DetailsScreen } from "~/screens/DetailsScreen";
import { PilotScreen } from "~/screens/PilotScreen";

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppRoutes.LOGIN_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={AppRoutes.LOGIN_SCREEN} component={LoginScreen} />

      <Stack.Screen
        name={AppRoutes.STARSHIPS_FEED_SCREEN}
        component={FeedScreen}
      />

      <Stack.Screen
        name={AppRoutes.TERMS_SCREEN}
        component={TermsScreen}
        options={{
          presentation: "modal",
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name={AppRoutes.PILOT_SCREEN}
        component={PilotScreen}
        options={{
          presentation: "modal",
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />

      <Stack.Screen
        name={AppRoutes.STARSHIP_DETAILS_SCREEN}
        component={DetailsScreen}
        options={{
          presentation: "card",
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};
