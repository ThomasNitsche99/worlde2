import { Container, Stack } from "@mui/material";
import React, {useState} from "react";
import { ThemeChanger } from "../ThemeChanger";
import { WordRow } from "../WordRow";

//containing all the rows
export const WordleContainer = () => {

  const b: number[] = [1, 2, 3, 4, 5, 6];
  const[currentRow, setCurrentRow] = useState<number>(1);
  //get if played today, if not 
  



  return (
    <div>
      <Container >
        <Stack spacing={-1}>
        {b.map((number) => {
            return (
              <WordRow id={number} currentRow={currentRow} setCurrentRow={setCurrentRow} />
            )
          })}
        </Stack>
        <ThemeChanger />
      </Container>
    </div>
  );
};
