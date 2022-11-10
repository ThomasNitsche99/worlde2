import React from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { MainPage } from "./pages/MainPage";

// fungerer som en page for nå

export const App = () => {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

