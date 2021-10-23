import React, {useState} from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: theme.spacing(2),
  },
  menu: {
    flex: 1,
  },
  white: {
    color: 'white',
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [anchor, setAnchor] = useState(null); // expands or retracs the mobile bar
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // sets media query
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  return (
    <div className={classes.root}>
      <AppBar style={{ background: '#212121' }}>
        <Toolbar>
          <Typography
            variant="h5"
            component="p"
            color="primary"
            className={classes.title}
            style={{ color: 'white' }}
          >
            Pets App
          </Typography>
          {
            isMobile ? (
              <>
                <Drawer
                  variant="temporary"
                  anchor={theme.direction === 'lrt' ? 'left' : 'right'}
                  open={open}
                  ModalProps={{
                    keepMounted: true,
                  }}
                >
                  <IconButton onClick={() => setAnchor(null)} className={classes.menuButton}>
                    <CloseIcon />
                  </IconButton>
                  <div>
                    <List>
                      <ListItem button component={Link} to={process.env.PUBLIC_URL + "/"}>
                        <ListItemText primary={"Home"} />
                      </ListItem>
                      <ListItem button component={Link} to={process.env.PUBLIC_URL + "/manage-pets"}>
                        <ListItemText primary={"Manage pet"} />
                      </ListItem>
                    </List>
                  </div>
                </Drawer>
                
                <Grid item xs />

                <IconButton
                  color="primary"
                  className={classes.menuButton}
                  edge="end"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon className={classes.white} />
                </IconButton>
              </>
            ) : (
              <div style={{ marginRight: "2rem" }}>
                <Button variant="text" color="default" className={classes.white} style={{fontSize: '22px',  fontFamily: "PT Sans"}}
                  component={Link}
                  to={process.env.PUBLIC_URL + "/"}
                  onClick={() => setAnchor(null)}>
                  Home
                </Button>
                <Button variant="text" color="default" component={Link} className={classes.white} style={{fontSize: '22px',  fontFamily: "PT Sans"}}
                  onClick={() => setAnchor(null)}
                  to={process.env.PUBLIC_URL + "/manage-pets"}>
                  Manage pets
                </Button>
              </div>
            )
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;





