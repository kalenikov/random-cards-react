import Container from "@material-ui/core/Container"
import React from "react"
import InputSongName from "./InputSongName"
import {SongListItem} from "./SongListItem/SongListItem"
import {SongType} from "../../constants/types"
import Spinner from "../Spinner/Spinner"
import List from "@material-ui/core/List"
import {makeStyles, Theme} from "@material-ui/core/styles"
import ListItem from "@material-ui/core/ListItem"
import InboxIcon from "@material-ui/icons/Inbox"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import FavoriteIcon from "@material-ui/icons/Favorite"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import {Link} from "react-router-dom"
import {FixedSizeList} from "react-window"

const useStyles = makeStyles((theme) => ({
    root: {
    },
}))

export const SongList = props => {

    const classes = useStyles()

    if (props.isLoading) {
        return <Spinner/>
    }

    return (
        <Container>
            <Typography variant={"h4"}>
                All songs
            </Typography>
            <div className={classes.root}>

                <List component="nav" aria-label="main mailbox folders">
                    {/*<FixedSizeList itemCount={props.songs.length} height={400} itemSize={46}>*/}

                    {props.songs.map((song) =>
                        {
                            return (

                                <ListItem button key={song._id}
                                          component={Link} to={"/card/" + song._id}
                                >

                                    <ListItemIcon>
                                        {song.favor
                                            ? <FavoriteIcon/>
                                            : <FavoriteBorderIcon/>}

                                    </ListItemIcon>

                                    <ListItemText
                                        primary={song.name}
                                    />

                                </ListItem>

                            )
                        },
                    )}
                    {/*</FixedSizeList>*/}
                </List>

            </div>
        </Container>)
}


export default SongList
