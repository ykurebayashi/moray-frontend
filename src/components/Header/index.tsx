import React from "react";
import { MainHeader, OptionPill, PillsContainer } from "./style";
import { HeaderProps } from "./types";
import { useContext } from "react";
import { ThemeContext } from "../../style/ThemeContext";

export const Header = ({
  options,
  selectOption,
  currentNeighbourhood,
}: HeaderProps) => {
  const { setTheme, theme } = useContext(ThemeContext);
  const handleChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
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
        <OptionPill onClick={handleChangeTheme}>
          {/* {isDarkMode ? "Light" : "Dark"} */}
        </OptionPill>
      </PillsContainer>
    </MainHeader>
  );
};
