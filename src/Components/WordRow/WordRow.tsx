import React from "react";
import { Container, Grid } from "@mui/material";
import { WordBox } from "../WordBox/WordBox";

export const WordRow = () => {
  const b: number[] = [1, 2, 3, 4, 5];

  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Grid container spacing={2}>
          {b.map((number) => {
            return (
              <Grid item xs={2}>
                <WordBox letter={number} />
              </Grid>
            )
          })}
          <Grid item xs={8}></Grid>
        </Grid>
      </Container>
    </div>
  );
};
