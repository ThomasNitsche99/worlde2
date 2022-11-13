import { Container, Stack } from "@mui/material";
import React, {useState} from "react";
import { ThemeChanger } from "../ThemeChanger";
import { WordRow } from "../WordRow";

//containing all the rows
export const WordleContainer = () => {

  const b: number[] = [1, 2, 3, 4, 5, 6];
  const[currentRow, setCurrentRow] = useState<number>(1);
  const[rowWords, setRowWords] = useState([
    {id: 1, word: ''},
    {id:2, word: ''},
    {id:3, word: ''},
    {id:4, word: ''},
    {id:5, word: ''},
    {id:6, word: ''}
  ]);
   
  
  return (
    <div>
      <Container >
        <Stack spacing={-1}>
        {b.map((number) => {
            return (
              <WordRow 
                id={number} 
                currentRow={currentRow} 
                setCurrentRow={setCurrentRow}
                setRowWords = {setRowWords}
                />
            )
          })}
        </Stack>
        <ThemeChanger />
      </Container>
    </div>
  );
};
