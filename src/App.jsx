import React from "react";
import { CustomThemeProvider } from "./context/ThemeContext";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <CustomThemeProvider>
      <AppRouter />
    </CustomThemeProvider>
  );
}

export default App;
