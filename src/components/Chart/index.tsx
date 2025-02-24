import React from "react";
import { MainContainer, SingleColumn } from "./style";

export const Chart = ({ data }) => {
  console.log(data);
  const allValues = data?.map((element) => element.populacao);
  const highestValue = Math.max(...(allValues || []));

  const getPercentage = (element) => {
    const percentage = element.populacao / highestValue;
    return percentage * 100;
  };

  return (
    <MainContainer>
      {data?.map((element) => {
        return <SingleColumn $heightPercentage={getPercentage(element)} />;
      })}
    </MainContainer>
  );
};
