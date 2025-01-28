// components/NavBar.js
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          MyApp
        </Typography>
        <Button color="inherit" component={Link} href="/signin">
          Sign In
        </Button>
        <Button color="inherit" component={Link} href="/signup">
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
