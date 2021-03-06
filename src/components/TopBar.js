import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from "react-router";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
export default function TopBar({name}) {
    const classes = useStyles();

    const history = useHistory()

    const onLogOut =() =>{

        alert("User Logged Out")
        localStorage.clear()
        history.push("/")

        // LogoutUser(token)
        //     .then((e)=>{
        //         console.log(e)
        //         alert("User Logged Out")
        //         localStorage.clear()
        //         history.push("/")
        //     })
        //     .catch((e)=>alert(e))

    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Calorie Manager
                    </Typography>
                    <h4>Hello {name} | </h4>
                    <Button color="inherit" onClick={onLogOut}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
