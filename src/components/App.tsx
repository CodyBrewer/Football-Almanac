import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleDrawer = (open: boolean) => (
  //   event: React.KeyboardEvent | React.MouseEvent
  // ) => {
  //   if (
  //     event.type === "keydown" &&
  //     ((event as React.KeyboardEvent).key === "Tab" ||
  //       (event as React.KeyboardEvent).key === "Shift")
  //   ) {
  //     setIsOpen(open);
  //   }
  // };

  // return (
  //   <div>
  //     <div className={classes.root}>
  //       <AppBar position="static">
  //         <Toolbar>
  //           <IconButton
  //             edge="start"
  //             className={classes.menuButton}
  //             color="inherit"
  //             aria-label="menu"
  //           >
  //             <MenuIcon />
  //           </IconButton>
  //           <Typography variant="h6" className={classes.title}>
  //             Football Almanac
  //           </Typography>
  //         </Toolbar>
  //       </AppBar>
  //     </div>
  //     <Drawer open={isOpen} onClose={toggleDrawer(false)}>
  //       Hello Drawer!
  //     </Drawer>
  //   </div>
  // );
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Football Almanac
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Drawer open={isOpen} onClose={toggleDrawer(false)}>
        Hello Drawer!
      </Drawer>
    </div>
  );
};

export default App;
