
import { Container } from '@mui/material'
import React from 'react'
import { ThemeProvider } from '../Assets/ThemeContext'
import { NavBar } from '../Components/NavBar/NavBar'
import { WordleContainer } from '../Components/WordleContainer/WordleContainer'

export const MainPage = () => {
  return (
    <div>
        <ThemeProvider>
        <NavBar />
        <Container
          maxWidth="xl"
          sx={{
            backgroundColor: "#3a3a3c",
            display: "flex",
            justifyContent: " center",
          }}
        >
          <WordleContainer />
        </Container>
      </ThemeProvider>
      
    </div>
  )
}

