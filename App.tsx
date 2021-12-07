import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NetworkProvider } from "react-native-offline";
import "react-native-gesture-handler";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";

import { AppLayout } from "./AppLayout";

import { Offline } from "~/components/Offline";
import { Navigator } from "~/navigation/Navigator";
import { useCurrentRouteName } from "~/hooks/useCurrentRouteName";
import { AppRoutes, RoutesConfig } from "~/navigation/AppRoutes";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  const navigationRef = createNavigationContainerRef();

  const { title, updateTitle } = useCurrentRouteName(navigationRef);

  return (
    <NetworkProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer onStateChange={updateTitle} ref={navigationRef}>
          <AppLayout
            title={RoutesConfig.shouldHideTitle(title) ? undefined : title}
            withFooter={!RoutesConfig.shouldHideFooter(title)}
          >
            <Offline />
            <Navigator />
          </AppLayout>
        </NavigationContainer>
      </QueryClientProvider>
    </NetworkProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
