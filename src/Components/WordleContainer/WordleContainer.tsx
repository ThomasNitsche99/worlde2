import { Container, Stack } from "@mui/material";
import React from "react";
import { WordRow } from "../WordRow";

export const WordleContainer = () => {
  return (
    <div>
      <Container >
        <Stack spacing={-1}>
          <WordRow />
          <WordRow />
          <WordRow />
          <WordRow />
          <WordRow />
          <WordRow />
        </Stack>
      </Container>
    </div>
  );
};
