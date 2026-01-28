import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./App.css";
import Approuter from "./Components/Approuter.jsx";
//import store from "./redux/store.js";
//import { Provider } from "react-redux";
//import Ss2 from "./Components/UseReducer/Ss2.jsx";
//import Mm from "./Components/Mm.jsx";
//import Ss3 from "./Components/UseReducer/Ss3.jsx";
//import Mm1 from "./Components/Mm1.jsx";
//import Mm2 from "./Components/UseMemo/Mm2.jsx";
//import Ss4 from "./Components/UseReducer/Ss4.jsx";
//import { Counter } from "./redux/features/Counter.jsx";
//import Approuter from "./Components/Approuter.jsx";
//import Show from "./Components/Show.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Approuter />
  </React.StrictMode>
);
