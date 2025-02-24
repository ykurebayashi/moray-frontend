import React from "react";
import { MainContainer, SingleColumn } from "./style";
import { GetGeoJsonItemType } from "../../query/useGetGeoJson";

type ChartProps = {
  data: GetGeoJsonItemType[];
};
export const Chart = ({ data }: ChartProps) => {
  const allValues = data?.map((element) => element.populacao);
  const highestValue = Math.max(...(allValues || []));

  const getPercentage = (element) => {
    const percentage = element.populacao / highestValue;
    return percentage * 100;
  };

  return (
    <MainContainer>
      {data?.map((element) => {
        return (
          <SingleColumn
            key={element.populacao}
            $heightPercentage={getPercentage(element)}
          />
        );
      })}
    </MainContainer>
  );
};
