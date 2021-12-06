import React from "react";
import {Button, Card, Paragraph, Title} from "react-native-paper";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    containerCard: {
        marginBottom: 32,
    },
});

export type Props = {
    name: String,
    model: String,
    cost_in_credits: String,
    manufacturer: String,
}

const CardItem = ({name, model, cost_in_credits, manufacturer}: Props) => {
    const handleBuy = () => {
        alert("Buy!");
    };

    return (
        <Card style={styles.containerCard}>
            <Card.Title title={name} subtitle={model} />
            <Card.Content>
                <Paragraph>{manufacturer}</Paragraph>
                <Title>{cost_in_credits} credits</Title>
            </Card.Content>
            <Card.Actions>
                { cost_in_credits !== "unknown" && <Button onPress={handleBuy}>BUY THIS SPACESHIP</Button> }
            </Card.Actions>
        </Card>
    )
}

export default CardItem
