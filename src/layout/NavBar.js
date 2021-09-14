import React from "react";
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
  ListItemText
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

// LOCAL-STYLING
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
}));

const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null); // expands or retracs the mobile bar
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // sets media query
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography
            variant="h5"
            component="p"
            color="textPrimary"
            className={classes.title}
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
                  <IconButton onClick={() => setAnchorEl(null)} className={classes.menuButton}>
                    <CloseIcon />
                  </IconButton>
                  <div>
                    <List>
                      <ListItem button component={Link} to={process.env.PUBLIC_URL + "/"}>
                        <ListItemText primary={"Home"} />
                      </ListItem>
                      <ListItem button component={Link} to={process.env.PUBLIC_URL + "/manage-pets"}>
                        <ListItemText primary={"New pet"} />
                      </ListItem>
                    </List>
                  </div>
                </Drawer>

                <IconButton
                  color="textPrimary"
                  className={classes.menuButton}
                  edge="end"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
              </>
            ) : (
              <div style={{ marginRight: "2rem" }}>
                <Button variant="text" color="default"
                  component={Link}
                  to={process.env.PUBLIC_URL + "/"}
                  onClick={() => setAnchorEl(null)}>
                  Home
                </Button>
                <Button variant="text" color="default" component={Link}
                  onClick={() => setAnchorEl(null)}
                  to={process.env.PUBLIC_URL + "/manage-pets"}>
                  New pet
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





