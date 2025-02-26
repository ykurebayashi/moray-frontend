import { BrowserRouter, Routes, Route } from "react-router";
import { PublicRoutes } from "./Routes/Routes";
import { useEffect, useState } from "react";
import { useLocalStorage } from "./storage/useLocalStorage";
import { GeneralContext } from "./context/GeneralContext";
import React from "react";
function App() {
    var _a = useState("dark"), theme = _a[0], setTheme = _a[1];
    var _b = useState([]), favs = _b[0], setFavs = _b[1];
    var _c = useLocalStorage(), setValue = _c.setValue, getValue = _c.getValue;
    var handleChangeTheme = function (param) {
        setTheme(param);
        setValue("theme", param);
    };
    var handleChangeFavs = function (param) {
        setFavs(param);
        setValue("favs", param);
    };
    useEffect(function () {
        if (getValue("theme") === "light") {
            setTheme("light");
        }
        else {
            setTheme("dark");
        }
        var favs = getValue("favs");
        if (favs) {
            setFavs(favs);
        }
    }, [getValue]);
    return (React.createElement(BrowserRouter, null,
        React.createElement(GeneralContext.Provider, { value: {
                theme: theme,
                setTheme: handleChangeTheme,
                favs: favs,
                setFavs: handleChangeFavs,
            } },
            React.createElement(Routes, null, PublicRoutes.map(function (element) {
                return (React.createElement(Route, { path: element.path, key: element.key, element: React.createElement(element.component, null) }));
            })))));
}
export default App;
