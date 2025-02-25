import React, { useMemo } from "react";
import { MainContainer, SingleColumn } from "./style";
import { ChartProps } from "./type";
import { GetGeoJsonItemType } from "../../query/useGetGeoJson";

export const Chart = ({ data }: ChartProps) => {
  const allValues = useMemo(() => {
    return data?.map((element) => element.populacao);
  }, [data]);

  const highestValue = useMemo(() => {
    return Math.max(...(allValues || []));
  }, [allValues]);

  const getPercentage = (element: GetGeoJsonItemType) => {
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
