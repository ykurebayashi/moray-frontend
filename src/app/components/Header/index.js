import React, { useRef, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { useClickOutside } from "../../../hooks/useDetectClickOutside";
import { FlexRow } from "../Modal/style";
import { GeneralContext } from "../../../context/GeneralContext";
import { MainHeader, CloseButton, DropdownMenu, FavoriteOption, OptionPill, PillsContainer, } from "./style";
export var Header = function (_a) {
    var options = _a.options, selectOption = _a.selectOption, currentNeighbourhood = _a.currentNeighbourhood;
    var navigate = useNavigate();
    var _b = useState(false), showFavs = _b[0], setShowFavs = _b[1];
    var ref = useRef(null);
    useClickOutside(ref, function () { return setShowFavs(false); });
    var _c = useContext(GeneralContext), setTheme = _c.setTheme, theme = _c.theme, favs = _c.favs, setFavs = _c.setFavs;
    var isDarkMode = theme === "dark";
    var handleChangeTheme = function () {
        if (theme === "light") {
            return setTheme("dark");
        }
        return setTheme("light");
    };
    var handleDeleteFavorite = function (id) {
        var newValues = favs.filter(function (element) { return element.id !== id; });
        setFavs(newValues);
    };
    return (React.createElement(MainHeader, null,
        React.createElement(PillsContainer, null, options === null || options === void 0 ? void 0 : options.map(function (element) {
            return (React.createElement(OptionPill, { onClick: function () { return selectOption(element); }, "$selected": currentNeighbourhood === element.properties.id, "$isDarkMode": isDarkMode, key: element.properties.id }, element.properties.name));
        })),
        React.createElement(PillsContainer, null,
            React.createElement(OptionPill, { "$isDarkMode": isDarkMode, onClick: function () { return setShowFavs(function (prev) { return !prev; }); } }, "Favoritos"),
            React.createElement(OptionPill, { "$isDarkMode": isDarkMode, onClick: handleChangeTheme }, isDarkMode ? "Light" : "Dark"),
            showFavs && (React.createElement(DropdownMenu, { "$isDarkMode": isDarkMode, ref: ref }, favs.map(function (element) {
                return (React.createElement(FlexRow, null,
                    React.createElement(FavoriteOption, { "$isDarkMode": isDarkMode, onClick: function () {
                            navigate("/".concat(element.id));
                            setShowFavs(false);
                        } }, element.name),
                    React.createElement(CloseButton, { "$isDarkMode": isDarkMode, onClick: function () { return handleDeleteFavorite(element.id); } }, "X")));
            }))))));
};
