import React, { useContext } from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from '../../Assets/ThemeContext';


export const NavBar: React.FC = () => {

  const { theme, toggleTheme } = useContext(ThemeContext)
  const mode : string = theme === 'light' ? '#FFF' : '#333'


  const color = createTheme({
    palette: {
      primary: {
        main: mode,
      },
    },
  });



  return (
    <ThemeProvider theme={color}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='primary'>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              Worlde
            </Typography>
            <HelpIcon fontSize="large" />
            <EqualizerIcon fontSize="large" />
            <SettingsIcon fontSize="large" />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
