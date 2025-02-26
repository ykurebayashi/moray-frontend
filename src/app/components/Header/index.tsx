import React, { useRef, useState } from "react";
import {
  MainHeader,
  OptionPill,
  PillsContainer,
  DropdownMenu,
  FavoriteOption,
  CloseButton,
} from "./style";
import { HeaderProps } from "./types";
import { useContext } from "react";
import { GeneralContext } from "../../../context/GeneralContext";
import { useNavigate } from "react-router";
import { useClickOutside } from "../../../hooks/useDetectClickOutside";
import { FlexRow } from "../Modal/style";

export const Header = ({
  options,
  selectOption,
  currentNeighbourhood,
}: HeaderProps) => {
  const navigate = useNavigate();
  const [showFavs, setShowFavs] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setShowFavs(false));

  const { setTheme, theme, favs, setFavs } = useContext(GeneralContext);

  const isDarkMode = theme === "dark";

  const handleChangeTheme = () => {
    if (theme === "light") {
      return setTheme("dark");
    }
    return setTheme("light");
  };

  const handleDeleteFavorite = (id: number) => {
    const newValues = favs.filter((element) => element.id !== id);
    setFavs(newValues);
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
          <DropdownMenu $isDarkMode={isDarkMode} ref={ref}>
            {favs.map((element) => {
              return (
                <FlexRow>
                  <FavoriteOption
                    $isDarkMode={isDarkMode}
                    onClick={() => {
                      navigate(`/${element.id}`);
                      setShowFavs(false);
                    }}
                  >
                    {element.name}
                  </FavoriteOption>
                  <CloseButton
                    $isDarkMode={isDarkMode}
                    onClick={() => handleDeleteFavorite(element.id)}
                  >
                    X
                  </CloseButton>
                </FlexRow>
              );
            })}
          </DropdownMenu>
        )}
      </PillsContainer>
    </MainHeader>
  );
};
