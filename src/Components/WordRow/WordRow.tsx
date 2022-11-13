import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import { WordBox } from "../WordBox/WordBox";

interface WordRowProps {
  id: number;
  currentRow: number;
  setCurrentRow: React.Dispatch<React.SetStateAction<number>>;
  setRowWords: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        word: string;
      }[]
    >
  >;
}

export const WordRow: React.FC<WordRowProps> = ({
  id,
  currentRow,
  setCurrentRow,
}: WordRowProps) => {
  //id's
  const b: number[] = [1, 2, 3, 4, 5];
  //current column to be focused 
  const [currentColumn, setCurrentColumn] = useState<number>(1);
  //the word from each row
  const [rowWord, setRowWord] =  useState<string>('');

  console.log(rowWord)

  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          pointerEvents: currentRow !== id ? "none" : "auto",
        }}
      >
        <Grid container spacing={2}>
          {b.map((number) => {
            return (
              <Grid item xs={2}>
                <WordBox
                  id={number}
                  disabled={currentRow !== id ? true : false}
                  currentColumn={currentColumn}
                  setCurrentColumn={setCurrentColumn}
                  setRowWord = {setRowWord}
                  rowWord = {rowWord}
                />
              </Grid>
            );
          })}
          <Grid item xs={8}></Grid>
        </Grid>
      </Container>
    </div>
  );
};
