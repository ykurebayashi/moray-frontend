import React from "react";
import { MainHeader, OptionPill } from "./style";
import { HeaderProps } from "./types";

export const Header = ({
  options,
  selectOption,
  currentNeighbourhood,
}: HeaderProps) => {
  return (
    <MainHeader>
      {options?.map((element) => {
        return (
          <OptionPill
            onClick={() => selectOption(element)}
            $selected={currentNeighbourhood === element.properties.id}
          >
            {element.properties.name}
          </OptionPill>
        );
      })}
    </MainHeader>
  );
};
