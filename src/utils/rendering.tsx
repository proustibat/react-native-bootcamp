import * as React from "react";

import { RowsWithIncrementalTitle } from "~/components/RowsWithIncrementalTitle";

export type DataListItem = [
  title: string,
  list: string[],
  onPress?: (value: string) => () => void
];
export type DataList = DataListItem[];

export const renderDataList = (
  [entryTitle, list, onPress]: DataListItem,
  i: number
) =>
  list.length > 0 ? (
    <RowsWithIncrementalTitle
      key={`entryTitle-${i}`}
      title={entryTitle}
      list={list}
      onPress={onPress}
    />
  ) : null;
