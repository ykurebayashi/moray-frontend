import { BrowserRouter, Routes, Route } from "react-router";
import { PublicRoutes } from "./Routes/Routes";
import { useEffect, useState } from "react";
import { ThemeContext } from "./style/ThemeContext";
import { useLocalStorage } from "./storage/useLocalStorage";

function App() {
  const [theme, setTheme] = useState("dark");
  const [favs, setFavs] = useState([]);
  const { setValue, getValue } = useLocalStorage();

  const handleChangeTheme = (param) => {
    setTheme(param);
    setValue("theme", param);
  };

  const handleChangeFavs = (param) => {
    setFavs(param);
    setValue("favs", param);
  };

  useEffect(() => {
    if (getValue("theme") === "light") {
      setTheme("ligth");
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
      <ThemeContext.Provider
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
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
