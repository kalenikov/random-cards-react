import Avatar from "@material-ui/core/Avatar"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import FormControlLabel from '@material-ui/core/FormControlLabel'
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import {createStyles, makeStyles} from "@material-ui/core/styles"
import Switch from '@material-ui/core/Switch'
import React from "react"
import {Link} from "react-router-dom"
import {useAuth0} from "../Auth0/react-auth0-spa";
import ListIcon from '@material-ui/icons/List';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';


const useStyles = makeStyles(theme =>
    createStyles({
        list: {
            width: 250,
        },
        drawer: {
            [theme.breakpoints.up("sm")]: {
                width: 240,
                flexShrink: 0,
            },
        },
    }))

const AppDrawer = (props) => {

    const {isAuthenticated, loginWithRedirect, logout, user} = useAuth0()

    const classes = useStyles()

    return (
        <Drawer
            className={classes.drawer}
            variant="temporary"
            anchor="left"
            open={props.open}
            onClose={props.handleDrawerClose}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div
                className={classes.list}
                role="presentation"
            >
                <List>

                    <ListItem onClick={props.handleDrawerClose} button component={Link} to={'//'}>
                        <ListItemText primary={"Main"}/>
                    </ListItem>

                    {user && <>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar
                                    src={user.picture}
                                />
                            </ListItemAvatar>

                            <ListItemText primary={user.nickname}/>

                        </ListItem>

                        <ListItem button component={Link} to={'/profile'} onClick={props.handleDrawerClose}>
                            <ListItemText primary={"Profile"}/>
                        </ListItem>

                        <Divider/>
                    </>
                    }

                    {!isAuthenticated &&
                    <>
                        <ListItem onClick={props.handleDrawerClose} button component={Link} to={'/cards'}>
                            <ListItemIcon>
                                <ListIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"My cards"}/>
                        </ListItem>

                        <ListItem button component={Link} to={'/lists'}>
                            <ListItemIcon>
                                <LocalOfferIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"My tags"}/>
                        </ListItem>

                        <Divider/>

                        <ListItem>
                            <FormControlLabel
                                control={<Switch
                                    checked={props.getOnlyFavor}
                                    onChange={() => props.toogleGetOnlyFavor()}
                                    name="ShowOnlyFavor"
                                    color="primary"
                                />}
                                label="Show only favor"
                            />
                        </ListItem>

                        <ListItem>
                            <FormControlLabel
                                control={<Switch
                                    checked={props.showHidden}
                                    onChange={() => props.toogleShowHidden()}
                                    name="ShowHide"
                                    color="primary"
                                />}
                                label="Show hide"
                            />
                        </ListItem>

                    </>}

                    <Divider/>


                    {!isAuthenticated &&
                    // <ListItem onClick={props.handleDrawerClose} button component={Link} to={'/sign/'}>
                    <ListItem onClick={() => loginWithRedirect({})} button>
                        <ListItemText primary={"Login"}/>
                    </ListItem>
                    }

                    {isAuthenticated &&
                    // <ListItem onClick={props.handleDrawerClose} button component={Link} to={'/sign/'}>
                    <ListItem onClick={() => logout()} button>
                        <ListItemText primary={"Logout"}/>
                    </ListItem>
                    }

                </List>
            </div>
        </Drawer>
    )
}

export default AppDrawer
