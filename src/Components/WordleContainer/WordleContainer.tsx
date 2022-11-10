import { Container, Stack } from "@mui/material";
import React from "react";
import { ThemeChanger } from "../Test";
import { WordRow } from "../WordRow";

export const WordleContainer = () => {
  //get if played today, if not 
  const WordRowNumber: number = 1



  return (
    <div>
      <Container >
        <Stack spacing={-1}>
          <WordRow id={1} />
          <WordRow id={2}/>
          <WordRow id={3}/>
          <WordRow id={4}/>
          <WordRow id={5}/>
          <WordRow id={6}/>
        </Stack>
        <ThemeChanger />
      </Container>
    </div>
  );
};
