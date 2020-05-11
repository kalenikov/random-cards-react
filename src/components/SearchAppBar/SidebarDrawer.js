import Avatar from "@material-ui/core/Avatar"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import {createStyles, makeStyles} from "@material-ui/core/styles"
import React from "react"
import {Link} from "react-router-dom"

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

const SidebarDrawer = ({handleDrawerClose, open}) => {

    const classes = useStyles()

    return (
        <Drawer
            className={classes.drawer}
            variant="temporary"
            anchor="left"
            open={open}
            onClose={handleDrawerClose}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div
                className={classes.list}
                role="presentation"
                onClick={handleDrawerClose}
                onKeyDown={handleDrawerClose}
            >
                <List>
                    <Avatar>Sergey</Avatar>

                    <Divider />

                    {/*<ListItem button component={Link} to={'/lists'}>*/}
                    {/*    <ListItemIcon />*/}
                    {/*    <ListItemText primary={"All list"}/>*/}
                    {/*</ListItem>*/}

                    <ListItem button component={Link} to={'/cards'}>
                        <ListItemIcon />
                        <ListItemText primary={"All songs"}/>
                    </ListItem>

                    <Divider />

                    <ListItem button component={Link} to={'/sign/'}>
                        <ListItemText primary={"Logout"}/>
                    </ListItem>

                </List>
            </div>
        </Drawer>
    )
}

export default SidebarDrawer
