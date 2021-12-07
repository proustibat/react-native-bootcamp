import { useQuery } from "react-query";

async function fetchData() {
  const result = await fetch("https://swapi.dev/api/starships/");
  const json = await result.json();
  return json;
}

export const useStarships = () => {
  return useQuery(["starships"], fetchData);
};
