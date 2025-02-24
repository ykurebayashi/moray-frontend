import { BrowserRouter, Routes, Route } from "react-router";
import { PublicRoutes } from "./Routes/Routes";
import { Header } from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
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
    </BrowserRouter>
  );
}

export default App;
