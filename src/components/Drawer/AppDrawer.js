import Avatar from "@material-ui/core/Avatar"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import FormControlLabel from '@material-ui/core/FormControlLabel'
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import {createStyles, makeStyles} from "@material-ui/core/styles"
import Switch from '@material-ui/core/Switch'
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

const AppDrawer = (props) => {

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
                    {/*<ListItem button component={Link} to={'/lists'}>*/}
                    {/*    <ListItemIcon />*/}
                    {/*    <ListItemText primary={"All list"}/>*/}
                    {/*</ListItem>*/}

                    <ListItem onClick={props.handleDrawerClose} button component={Link} to={'/cards'}>
                        <ListItemIcon/>
                        <ListItemText primary={"All songs"}/>
                    </ListItem>

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
                                checked={props.getOnlyFavor}
                                onChange={() => props.toogleGetOnlyFavor()}
                                name="ShowHide"
                                color="primary"
                            />}
                            label="Show hide"
                        />
                    </ListItem>

                    <Divider/>

                    <ListItem onClick={props.handleDrawerClose} button component={Link} to={'/sign/'}>
                        <ListItemText primary={"Logout"}/>
                    </ListItem>

                </List>
            </div>


        </Drawer>
    )
}

export default AppDrawer
