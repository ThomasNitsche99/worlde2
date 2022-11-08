import React from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import { WordleContainer } from "./Components/WordleContainer/WordleContainer";
import { NavBar } from "./Components/NavBar/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container maxWidth="xl" sx={{ backgroundColor: "#3a3a3c", display: "flex", justifyContent:' center'}}>
        <WordleContainer />
      </Container>
    </div>
  );
}

export default App;
