import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import {
  authApp,
  connectEmulatorAuth,
  connectEmulatorFs,
  dbFirestore,
} from "./firebase";
import RoutesConfig from "./routes";
import { AppTheme } from "./theme";

function App() {
  if (window.location.hostname === "localhost") {
    connectEmulatorFs(dbFirestore, "127.0.0.1", 8080);
    connectEmulatorAuth(authApp, `http://127.0.0.1:9099`);
  }
  return (
    <BrowserRouter>
      <ChakraProvider theme={AppTheme}>
        <RoutesConfig />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
