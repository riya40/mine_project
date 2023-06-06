import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';




//function appBarLabel(label) {
  //return (
   // <Toolbar>
     // <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
       // <MenuIcon />
      //</IconButton>
      //<Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        //{label}
      //</Typography>
    //</Toolbar>
  //);
//}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function EnableColorOnDarkAppBar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Student management
          </Typography>
          <Button color="inherit">Marks</Button>
          <Button color="inherit">Attendence</Button>
          <Button color="inherit">logout</Button>
        </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}