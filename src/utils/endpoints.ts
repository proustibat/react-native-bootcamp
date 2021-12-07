type EndpointsList = {
  [key: string]: {
    url?: string;
    reactQueryKey: string[];
  };
};

export const ENDPOINTS: EndpointsList = {
  STARSHIPS: {
    url: "https://swapi.dev/api/starships/",
    reactQueryKey: ["starships"],
  },
  STARSHIP: {
    reactQueryKey: ["starship"],
  },
  PILOT: {
    reactQueryKey: ["pilot"],
  },
};
