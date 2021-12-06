import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from "expo-constants";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import LoginScreen from "./src/screens/LoginScreen";
import TermsScreen from "./src/screens/TermsScreen";
import FeedScreen from "./src/screens/FeedScreen";


const styles = StyleSheet.create({
  root: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  },
});


// Create a client
const queryClient = new QueryClient()

const App = () => {

    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
          <View style={styles.root}>
            {/*<LoginScreen/>*/}
            {/*<TermsScreen/>*/}
            <FeedScreen/>
          </View>
        </QueryClientProvider>
    );
}

export default App;


