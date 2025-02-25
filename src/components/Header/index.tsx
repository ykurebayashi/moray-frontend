import React from "react";
import { MainHeader } from "./style";
import { HeaderProps } from "./types";

export const Header = ({ options }: HeaderProps) => {
  return (
    <MainHeader>
      {options?.map((element) => {
        return <p>{element.properties.name}</p>;
      })}
    </MainHeader>
  );
};
