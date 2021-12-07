import { useQuery } from "react-query";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader/native";
import { Text } from "react-native-paper";
import * as React from "react";

const fetchData = async (url: string) => await (await fetch(url)).json();

export const useSwapi = (url = "", reactQueryKey: string | string[] = [""]) => {
  const [shouldRenderThis, setShouldRenderThis] = useState<ReactElement>();

  const queryResult = useQuery(reactQueryKey, () => fetchData(url));
  const { isLoading, isError } = queryResult;

  useEffect(() => {
    const errorMessage = <Text>Something bad happened…</Text>;
    if (isLoading) {
      setShouldRenderThis(
        <>
          {Array.from(Array(5)).map((_, i) => (
            <ContentLoader key={i} />
          ))}
        </>
      );
    } else if (isError) {
      setShouldRenderThis(errorMessage);
    } else {
      setShouldRenderThis(undefined);
    }
  }, [isLoading, isError]);

  return { shouldRenderThis, ...queryResult };
};
