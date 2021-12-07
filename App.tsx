import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NetworkProvider } from "react-native-offline";

// import { LoginScreen } from "~/screens/LoginScreen";
// import { TermsScreen } from "~/screens/TermsScreen";

import { AppLayout } from "./AppLayout";

import { Offline } from "~/components/Offline";
import { FeedScreen } from "~/screens/FeedScreen";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <NetworkProvider>
      <QueryClientProvider client={queryClient}>
        <AppLayout title="Starships" withFooter={true}>
          <Offline />
          {/*<LoginScreen/>*/}
          {/*<TermsScreen/>*/}
          <FeedScreen />
        </AppLayout>
      </QueryClientProvider>
    </NetworkProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
