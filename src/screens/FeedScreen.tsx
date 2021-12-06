import React from "react";
import {SafeAreaView, StyleSheet, StatusBar, FlatList} from "react-native";
import {Headline, Text} from "react-native-paper";
import ContentLoader  from 'react-content-loader/native'
import CardItem from "../components/CardItem";
import useStarships from "../hooks/useStarships";

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



const FeedScreen = () => {
    const { isLoading, isError, data } = useStarships()

    if(isLoading) {
        return <>{Array.from(Array(5)).map((_,i) => <ContentLoader key={i}/>)}</>
    }

    if(isError) {
        return <Text>Something bad happened…</Text>
    }

    return (
        <SafeAreaView style={styles.safeContainer}>
            <Headline style={styles.container}>Starships</Headline>
            <FlatList
                style={styles.container}
                data={data.results}
                renderItem={({ item }) => <CardItem {...item}/>}
                keyExtractor={({name, model}) => `${name}-${model}`}
            />
        </SafeAreaView>
    )
};

export default FeedScreen;
