import { createContext } from "react";
export var GeneralContext = createContext({
    theme: "dark",
    setTheme: function () { },
    favs: [],
    setFavs: function () { },
});
