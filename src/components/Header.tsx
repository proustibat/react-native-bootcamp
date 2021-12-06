import React from 'react';
import {View, StyleSheet} from "react-native";
import {Colors, Headline} from "react-native-paper";

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        justifyContent: "center",
        height: 256,
        backgroundColor: Colors.purple500,
    },
    headerText: {
        color: Colors.white,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
});

type Props = {
    title: String
}
const Header = ({title}: Props) => {
    return (
        <View style={styles.header}>
            <Headline style={styles.headerText}>{title}</Headline>
        </View>
    );
}

export default Header;
