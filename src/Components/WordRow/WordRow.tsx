import React, {  useState } from "react";
import { Container, Grid } from "@mui/material";
import { WordBox } from "../WordBox/WordBox";

interface WordRowProps{
  id: number, 
  currentRow : number,
  setCurrentRow: React.Dispatch<React.SetStateAction<number>>
}


export const WordRow : React.FC<WordRowProps> = ({id, currentRow, setCurrentRow} : WordRowProps) => {
  const b: number[] = [1, 2, 3, 4, 5];

  const[currentColumn, setCurrentColumn] = useState<number>(1)
  console.log(currentColumn)

  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          pointerEvents: currentRow !== id ? 'none' : 'auto',

        }}
      >
        <Grid container spacing={2}>
          {b.map((number) => {
            return (
              <Grid item xs={2}>
                <WordBox id={number} disabled={currentRow !== id ? true : false} currentColumn={currentColumn} setCurrentColumn={setCurrentColumn}/>
              </Grid>
            )
          })}
          <Grid item xs={8}></Grid>
        </Grid>
      </Container>
    </div>
  );
};
