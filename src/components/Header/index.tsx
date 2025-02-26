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
import { GeneralContext } from "../../Context/GeneralContext";
import { useNavigate } from "react-router";

export const Header = ({
  options,
  selectOption,
  currentNeighbourhood,
}: HeaderProps) => {
  const navigate = useNavigate();
  const [showFavs, setShowFavs] = useState<boolean>(false);

  const { setTheme, theme, favs } = useContext(GeneralContext);

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
            {favs.map((element) => {
              return (
                <FavoriteOption
                  $isDarkMode={isDarkMode}
                  onClick={() => {
                    navigate(`/${element.id}`);
                    setShowFavs(false);
                  }}
                >
                  {element.name}
                </FavoriteOption>
              );
            })}
          </DropdownMenu>
        )}
      </PillsContainer>
    </MainHeader>
  );
};
