import React from "react";
import {Button, Card, Subheading, Title} from "react-native-paper";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    containerCard: {
        marginBottom: 32,
    },
});

export type Props = {
    name: String,
    model: String,
    crew: String,
    cost_in_credits: String,
    manufacturer: String,
}

const CardItem = ({name, model, crew, cost_in_credits, manufacturer}: Props) => {
    const handleBuy = () => {
        alert("Buy!");
    };

    return (
        <Card style={styles.containerCard}>
            <Card.Title title={name} subtitle={manufacturer} />
            <Card.Content>
                <Title>{model}</Title>
                <Subheading>Crew: {crew}</Subheading>
            </Card.Content>
            <Card.Actions>
                {cost_in_credits === "unknown" ? (
                    <Button disabled>Not for sale</Button>
                ) : (
                    <Button onPress={handleBuy}>{cost_in_credits} credits</Button>
                )}
            </Card.Actions>
        </Card>
    )
}

export default CardItem
