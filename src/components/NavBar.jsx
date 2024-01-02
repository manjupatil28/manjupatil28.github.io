import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'transparent',
    position: 'fixed',
    zIndex: theme.zIndex.drawer + 1,
    borderBottom: '2px solid black',
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'white',
  },
  linkButton: {
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

function NavBar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} component={Link} to="/">
            Manjunathgouda Patil
          </Typography>
          {!isMobile && (
            <>
              <Button component={Link} to="/" className={classes.linkButton}>
                Home
              </Button>
              <Button component={Link} to="/about" className={classes.linkButton}>
                About
              </Button>
              <Button component={Link} to="/portfolio" className={classes.linkButton}>
                Portfolio
              </Button>
              <Button component={Link} to="/skills" className={classes.linkButton}>
                Skills
              </Button>
              <Button href="https://drive.google.com/uc?export=download&id=1c3fU8cGG5T0rxJU4LXTIvaQsvcAJ8nS5" target="_blank" download className={classes.linkButton}>
                Resume
              </Button>
              <Button component={Link} to="/contact" className={classes.linkButton}>
                Contact
              </Button>
            </>
          )}
          {isMobile && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={Link} to="/portfolio" onClick={toggleDrawer(false)}>
            <ListItemText primary="Portfolio" />
          </ListItem>
          <ListItem button component={Link} to="/skills" onClick={toggleDrawer(false)}>
            <ListItemText primary="Skills" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://drive.google.com/uc?export=download&id=1c3fU8cGG5T0rxJU4LXTIvaQsvcAJ8nS5"
            target="_blank"
            download
            onClick={toggleDrawer(false)}
          >
            <ListItemText primary="Resume" />
          </ListItem>
          <ListItem button component={Link} to="/contact" onClick={toggleDrawer(false)}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default NavBar;
