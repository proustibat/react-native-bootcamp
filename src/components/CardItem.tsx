import * as React from "react";
import { Button, Card, Paragraph, Title, Badge } from "react-native-paper";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerCard: {
    marginBottom: 32,
  },
  badge: {
    marginRight: 12,
    marginTop: 12,
  },
});

export type Props = {
  name: string;
  model: string;
  costInCredits: string;
  manufacturer: string;
  handleBuyAction: (costInCredits: number) => void;
  pilots: string[];
};

export const CardItem = ({
  name,
  model,
  costInCredits,
  manufacturer,
  handleBuyAction,
  pilots,
}: Props) => {
  return (
    <Card style={styles.containerCard}>
      <Badge size={24} visible={pilots.length > 0} style={styles.badge}>
        {pilots.length}
      </Badge>
      <Card.Title title={name} subtitle={model} />
      <Card.Content>
        <Paragraph>{manufacturer}</Paragraph>
        <Title>{costInCredits} credits</Title>
      </Card.Content>
      <Card.Actions>
        {costInCredits !== "unknown" && (
          <Button
            onPress={() => {
              handleBuyAction(parseFloat(costInCredits));
            }}
          >
            BUY THIS SPACESHIP!
          </Button>
        )}
      </Card.Actions>
    </Card>
  );
};
