import { BrowserRouter, Routes, Route } from "react-router";
import { PublicRoutes } from "./Routes/Routes";
import { useState } from "react";
import { ThemeContext } from "./style/ThemeContext";
import { useLocalStorage } from "./storage/useLocalStorage";

function App() {
  const [theme, setTheme] = useState("light");
  const { setValue } = useLocalStorage();

  const handleChangeTheme = (param) => {
    setTheme(param);
    setValue("theme", param);
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider
        value={{ theme: theme, setTheme: handleChangeTheme }}
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
