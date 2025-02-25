import React from "react";
import { MainHeader, OptionPill } from "./style";
import { HeaderProps } from "./types";

export const Header = ({ options, selectOption }: HeaderProps) => {
  return (
    <MainHeader>
      {options?.map((element) => {
        return (
          <OptionPill onClick={() => selectOption(element.properties)}>
            {element.properties.name}
          </OptionPill>
        );
      })}
    </MainHeader>
  );
};
