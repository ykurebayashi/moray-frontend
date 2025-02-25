import React from "react";
import { MainHeader, OptionPill, PillsContainer } from "./style";
import { HeaderProps } from "./types";

export const Header = ({
  options,
  selectOption,
  currentNeighbourhood,
}: HeaderProps) => {
  return (
    <MainHeader>
      <PillsContainer>
        {options?.map((element) => {
          return (
            <OptionPill
              onClick={() => selectOption(element)}
              $selected={currentNeighbourhood === element.properties.id}
              key={element.properties.id}
            >
              {element.properties.name}
            </OptionPill>
          );
        })}
      </PillsContainer>
      <PillsContainer>
        <OptionPill onClick={() => alert("trocou dark mode")}>Dark</OptionPill>
        <OptionPill onClick={() => alert("trocou lingua ")}>Lingua</OptionPill>
      </PillsContainer>
    </MainHeader>
  );
};
