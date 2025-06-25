import AppRouter from "./router/AppRouter.tsx";
import GlobalStylesTemplate from "./components/templates/GlobalStyles/GlobalStyles.template.tsx";
import { CssBaseline } from "@mui/material";

function App() {
  console.log("App");
  return (
    <>
      <CssBaseline />
      <GlobalStylesTemplate />
      <AppRouter />
    </>
  );
}

export default App;
