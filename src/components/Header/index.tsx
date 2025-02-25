import React from "react";
import { MainHeader } from "./style";
import { HeaderProps } from "./types";

export const Header = ({ options, selectOption }: HeaderProps) => {
  return (
    <MainHeader>
      {options?.map((element) => {
        return (
          <p onClick={() => selectOption(element.properties)}>
            {element.properties.name}
          </p>
        );
      })}
    </MainHeader>
  );
};
