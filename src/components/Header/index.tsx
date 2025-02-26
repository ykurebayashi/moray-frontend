import React, { useState } from "react";
import {
  MainHeader,
  OptionPill,
  PillsContainer,
  DropdownMenu,
  FavoriteOption,
} from "./style";
import { HeaderProps } from "./types";
import { useContext } from "react";
import { ThemeContext } from "../../style/ThemeContext";

export const Header = ({
  options,
  selectOption,
  currentNeighbourhood,
}: HeaderProps) => {
  const [showFavs, setShowFavs] = useState<boolean>(false);

  const { setTheme, theme } = useContext(ThemeContext);

  const isDarkMode = theme === "dark";

  const handleChangeTheme = () => {
    if (theme === "light") {
      return setTheme("dark");
    }
    return setTheme("light");
  };

  return (
    <MainHeader>
      <PillsContainer>
        {options?.map((element) => {
          return (
            <OptionPill
              onClick={() => selectOption(element)}
              $selected={currentNeighbourhood === element.properties.id}
              $isDarkMode={isDarkMode}
              key={element.properties.id}
            >
              {element.properties.name}
            </OptionPill>
          );
        })}
      </PillsContainer>
      <PillsContainer>
        <OptionPill
          $isDarkMode={isDarkMode}
          onClick={() => setShowFavs((prev) => !prev)}
        >
          Favoritos
        </OptionPill>
        <OptionPill $isDarkMode={isDarkMode} onClick={handleChangeTheme}>
          {isDarkMode ? "Light" : "Dark"}
        </OptionPill>
        {showFavs && (
          <DropdownMenu $isDarkMode={isDarkMode}>
            <FavoriteOption $isDarkMode={isDarkMode}>oi</FavoriteOption>
            <FavoriteOption $isDarkMode={isDarkMode}>oi</FavoriteOption>
            <FavoriteOption $isDarkMode={isDarkMode}>oi</FavoriteOption>
          </DropdownMenu>
        )}
      </PillsContainer>
    </MainHeader>
  );
};
