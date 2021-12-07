import type { NavigationContainerRefWithCurrent } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";

import type { AppRoutes } from "~/navigation/AppRoutes";

export const useCurrentRouteName = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigationRef: NavigationContainerRefWithCurrent<any>
) => {
  const [title, setTitle] = useState<AppRoutes>();

  // update the current name by getting the current route
  const updateTitle = useCallback(() => {
    const routeName = navigationRef?.current?.getCurrentRoute()?.name;
    routeName && setTitle(routeName as AppRoutes);
  }, [navigationRef]);

  useEffect(() => {
    updateTitle();
  }, [updateTitle]);

  return { title, updateTitle };
};
