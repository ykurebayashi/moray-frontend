import { BrowserRouter, Routes, Route } from "react-router";
import { PublicRoutes } from "./Routes/Routes";
import { useEffect, useState } from "react";
import { useLocalStorage } from "./storage/useLocalStorage";
import { GeneralContext } from "./context/GeneralContext";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [favs, setFavs] = useState<{ id: number; name: string }[]>([]);
  const { setValue, getValue } = useLocalStorage();

  const handleChangeTheme = (param: "light" | "dark") => {
    setTheme(param);
    setValue("theme", param);
  };

  const handleChangeFavs = (param: { id: number; name: string }[]) => {
    setFavs(param);
    setValue("favs", param);
  };

  useEffect(() => {
    if (getValue("theme") === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }

    const favs = getValue("favs");

    if (favs) {
      setFavs(favs);
    }
  }, [getValue]);

  return (
    <BrowserRouter>
      <GeneralContext.Provider
        value={{
          theme: theme,
          setTheme: handleChangeTheme,
          favs: favs,
          setFavs: handleChangeFavs,
        }}
      >
        <Routes>
          {PublicRoutes.map((element) => {
            return (
              <Route
                path={element.path}
                key={element.key}
                element={<element.component />}
              />
            );
          })}
        </Routes>
      </GeneralContext.Provider>
    </BrowserRouter>
  );
}

export default App;
