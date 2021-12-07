import * as React from "react";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerCard: {
    marginBottom: 32,
  },
});

export type Props = {
  name: string;
  model: string;
  costInCredits: string;
  manufacturer: string;
};

export const CardItem = ({
  name,
  model,
  costInCredits,
  manufacturer,
}: Props) => {
  const handleBuy = () => {
    console.log("Buy!");
  };

  return (
    <Card style={styles.containerCard}>
      <Card.Title title={name} subtitle={model} />
      <Card.Content>
        <Paragraph>{manufacturer}</Paragraph>
        <Title>{costInCredits} credits</Title>
      </Card.Content>
      <Card.Actions>
        {costInCredits !== "unknown" && (
          <Button onPress={handleBuy}>BUY THIS SPACESHIP</Button>
        )}
      </Card.Actions>
    </Card>
  );
};
