import * as React from "react";

import { Row } from "~/components/Row";

type Props = {
  title: string;
  list: string[];
  onPress?: (value: string) => () => void;
};
export const RowsWithIncrementalTitle = ({ title, list, onPress }: Props) => (
  <>
    {(list as string[]).map((item, itemIndex) => (
      <Row
        key={`${title} ${itemIndex + 1}`}
        title={`${title} ${itemIndex + 1}`}
        value={item}
        onPress={onPress}
      />
    ))}
  </>
);
