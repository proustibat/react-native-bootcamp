export enum AppRoutes {
  LOGIN_SCREEN = "Login Screen",
  TERMS_SCREEN = "Terms Screen",
  STARSHIPS_FEED_SCREEN = "Feed Screen",
  STARSHIP_DETAILS_SCREEN = "Details Screen",
  PILOT_SCREEN = "Pilot Screen",
}

export const RoutesConfig = {
  shouldHideTitle: (routeName?: AppRoutes | undefined) => {
    return routeName
      ? [
          AppRoutes.TERMS_SCREEN,
          AppRoutes.STARSHIP_DETAILS_SCREEN,
          AppRoutes.PILOT_SCREEN,
        ].includes(routeName)
      : false;
  },
  shouldHideFooter: (routeName?: AppRoutes | undefined) => {
    return routeName
      ? [
          AppRoutes.TERMS_SCREEN,
          AppRoutes.STARSHIP_DETAILS_SCREEN,
          AppRoutes.PILOT_SCREEN,
        ].includes(routeName)
      : false;
  },
};
