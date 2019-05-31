import React, { Component } from "react";

//Importing StatusBarConfig for all app
import "./configs/statusBarConfig";

//DisableConsoleYellowBox
console.disableYellowBox = true;

//Components
import Routes from "./routes/drawer";

const App = () => <Routes />;

export default App;
