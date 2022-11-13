import React, { useState, createContext, ReactNode } from "react";

type Words = [
    {id: 1, word: ''},
    {id:2, word: ''},
    {id:3, word: ''},
    {id:4, word: ''},
    {id:5, word: ''},
    {id:6, word: ''}
  ];

type WordsContext = { words: Words; changeWords: (id: number, letter: string) => void };

//the context 
export const WordsContext = createContext<WordsContext>(
  {} as WordsContext
);


interface WordsProviderProps{
  children: ReactNode
}
