import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetPopulationData = () => {
  return useQuery({
    staleTime: Infinity,
    queryKey: ["populationData"],
    queryFn: async () => {
      const resposne = await axios.get(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
      );
      const populationData = resposne.data?.data;

      const years = populationData.map((item: any) => item.Year);
      const populations = populationData.map((item: any) => item.Population);
      const nations = [
        ...new Set(populationData.map((item: any) => item.Nation)),
      ];
      const modifiedData = {
        years,
        populations,
        nations,
        originalData: resposne.data?.data,
      };
      return modifiedData;
    },
  });
};

export const useGetCryptocurrencyPrices = () => {
  return useQuery({
    staleTime: Infinity,
    queryKey: ["cryptoCurrencyPrices"],
    queryFn: async () => {
      const resposne = await axios.get(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      return resposne.data;
    },
  });
};
