import ReactDOM from "react-dom";
import "./index.css";

import { ContextProvider } from "./store/context";
import App from "./App";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
