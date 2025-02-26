import React, { useRef, useState } from "react";

import { HeaderProps } from "./types";
import { useContext } from "react";
import { useClickOutside } from "../../../hooks/useDetectClickOutside";
import { FlexRow } from "../Modal/style";
import { GeneralContext } from "../../../context/GeneralContext";
import {
  MainHeader,
  CloseButton,
  DropdownMenu,
  FavoriteOption,
  OptionPill,
  PillsContainer,
} from "./style";
import { useMobile } from "../../../hooks/useMobile";

export const Header = ({
  options,
  selectOption,
  currentNeighbourhood,
  setNeighbourhood,
}: HeaderProps) => {
  const [showFavs, setShowFavs] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const { isMobile } = useMobile();
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
    <MainHeader $isMobile={isMobile}>
      <PillsContainer $isMobile={isMobile}>
        {options?.map((element) => {
          return (
            <OptionPill
              onClick={() => {
                if (currentNeighbourhood === element.properties.id) {
                  return selectOption(null);
                }
                return selectOption(element);
              }}
              $selected={currentNeighbourhood === element.properties.id}
              $isDarkMode={isDarkMode}
              key={element.properties.id}
            >
              {element.properties.name}
            </OptionPill>
          );
        })}
      </PillsContainer>
      <PillsContainer $isMobile={isMobile}>
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
                      const selectedOption = options.find(
                        (option) => option.properties.id === element.id
                      );
                      setNeighbourhood(selectedOption);
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
