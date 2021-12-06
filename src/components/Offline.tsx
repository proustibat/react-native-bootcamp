import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Colors, Text } from 'react-native-paper';
import {useIsConnected} from "react-native-offline";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginHorizontal: '15%',
        position: 'absolute',
        top: 45,
        width: '70%',
        borderRadius: 10,
        backgroundColor: Colors.red100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 999
    },
    message: {
        color: Colors.red800,
    },
});


const Offline = () => {
    const isConnected = useIsConnected();
    return !isConnected ? (
        <View style={styles.container}>
            <Text style={styles.message}>You're offline!</Text>
            <ActivityIndicator animating={true} color={Colors.red800} />
        </View>
    ): null
};

export default Offline;

