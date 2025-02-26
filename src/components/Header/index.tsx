import React from "react";
import { MainHeader, OptionPill, PillsContainer } from "./style";
import { HeaderProps } from "./types";
import { useTheme } from "../../style";

export const Header = ({
  options,
  selectOption,
  currentNeighbourhood,
}: HeaderProps) => {
  const { toggleTheme } = useTheme();

  const handleChangeTheme = () => {
    toggleTheme();
    window.location.reload();
  };
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
        <OptionPill onClick={handleChangeTheme}>Dark</OptionPill>
        <OptionPill onClick={() => alert("trocou lingua ")}>Lingua</OptionPill>
      </PillsContainer>
    </MainHeader>
  );
};
