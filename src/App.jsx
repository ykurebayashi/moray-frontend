import { BrowserRouter, Routes, Route } from "react-router";
import { PublicRoutes } from "./Routes/Routes";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./style";

function App() {
  const { currentTheme } = useTheme();
  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
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
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
