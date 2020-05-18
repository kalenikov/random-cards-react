import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import IconButton from "@material-ui/core/IconButton"
import InputBase from "@material-ui/core/InputBase"
import {fade, makeStyles} from "@material-ui/core/styles"
import Switch from "@material-ui/core/Switch"
import TextField from '@material-ui/core/TextField'
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import AddIcon from '@material-ui/icons/Add'
import FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import React, {useState} from "react"
import {connect} from "react-redux"
import {Link as RouterLink} from "react-router-dom"
import {APP_HEADER} from "../../constants/constants"
import {setSongsList, setTerm, toogleGetOnlyFavor} from "../../redux/song-reducer"
import {toogleGetOnlyFavorUpdateList} from "../../redux/thunks"
import SidebarDrawer from "./SidebarDrawer"
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "70%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}))

const top100Films = [
    {title: 'The Shawshank Redemption', year: 1994},
    {title: 'The Godfather', year: 1972},
    {title: 'The Godfather: Part II', year: 1974},
    {title: 'The Dark Knight', year: 2008},
    {title: '12 Angry Men', year: 1957},]

const SearchAppBar = props => {

    const classes = useStyles()
    const [open, setOpen] = React.useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }


    return (
        <div className={classes.root}>
            <AppBar position="sticky">

                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Typography className={classes.title} variant="h6" noWrap>
                        <Button component={RouterLink} to="/" style={{color: "white"}}>
                            {APP_HEADER}
                        </Button>
                    </Typography>

                    <Switch
                        checked={props.getOnlyFavor}
                        checkedIcon={<FavoriteIcon/>}
                        icon={<FavoriteBorderIcon/>}
                        onChange={() => props.toogleGetOnlyFavor()}
                    />

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            value={props.term}
                            onChange={(ev)=>props.setTerm(ev.currentTarget.value)}
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{"aria-label": "search"}}
                        />
                    </div>

                    {/*<div className={classes.search} style={{color: "white"}}>*/}
                    {/*    <Highlights/>*/}
                    {/*</div>*/}

                </Toolbar>
            </AppBar>

            <SidebarDrawer
                handleDrawerClose={handleDrawerClose}
                open={open}/>
        </div>
    )
}

const Highlights = () => (
    <Autocomplete
        id="highlights-demo"
        style={{width: 300}}
        options={top100Films}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
            <TextField {...params} label="Highlights" variant="outlined" margin="normal"/>
        )}
        renderOption={(option, {inputValue}) => {
            const matches = match(option.title, inputValue);
            const parts = parse(option.title, matches);

            return (
                <div>
                    {parts.map((part, index) => (
                        <span key={index} style={{fontWeight: part.highlight ? 700 : 400}}>
                {part.text}
              </span>
                    ))}
                </div>
            );
        }}
    />
)


const mapStateToProps = state => {
    return {
        getOnlyFavor: state.songReducer.getOnlyFavor,
        term: state.songReducer.term
    }
}


export default connect(mapStateToProps,
    {
        toogleGetOnlyFavor,
        toogleGetOnlyFavorUpdateList,
        setTerm
    })(SearchAppBar)
{/*<Tooltip title="All cards">*/
}
{/*    <IconButton*/
}
{/*        component={NavLink}*/
}
{/*        to={"/cards/"}*/
}
{/*        style={{color: "white"}}>*/
}
{/*        <FormatListNumberedOutlinedIcon/>*/
}
{/*    </IconButton>*/
}
{/*</Tooltip>*/
}
