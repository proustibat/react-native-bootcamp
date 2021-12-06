import React from "react";
import {SafeAreaView, StyleSheet, StatusBar, FlatList} from "react-native";

import data from "../../api/data";
import CardItem, {Props as CardItemProps} from "../components/CardItem";

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    container: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
});

const FeedScreen = () => (
    <SafeAreaView style={styles.safeContainer}>
        <FlatList
            style={styles.container}
            data={data.results}
            renderItem={({ item }: {item: CardItemProps}) => <CardItem {...item}/>}
            keyExtractor={item => item.name}
        />
    </SafeAreaView>
);

export default FeedScreen;
