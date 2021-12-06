import React from 'react';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import LoginScreen from "./src/screens/LoginScreen";
import TermsScreen from "./src/screens/TermsScreen";
import FeedScreen from "./src/screens/FeedScreen";
import AppLayout from './AppLayout';
import { NetworkProvider } from 'react-native-offline';
import Offline from "./src/components/Offline";

// Create a client
const queryClient = new QueryClient()

const App = () => {
    return (
        <NetworkProvider>
            <QueryClientProvider client={queryClient}>
                <AppLayout title="Starships" withFooter={true}>
                    <Offline/>
                  {/*<LoginScreen/>*/}
                  {/*<TermsScreen/>*/}
                  <FeedScreen/>
                </AppLayout>
            </QueryClientProvider>
        </NetworkProvider>
    );
}

export default App;


