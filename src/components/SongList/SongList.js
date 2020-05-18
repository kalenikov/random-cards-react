import Button from '@material-ui/core/Button'
import Container from "@material-ui/core/Container"
import Fab from '@material-ui/core/Fab'
import IconButton from '@material-ui/core/IconButton'
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from "@material-ui/core/ListItemText"
import {makeStyles} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import React from "react"
import {Link, NavLink} from "react-router-dom"
import Spinner from "../Spinner/Spinner"
import DeleteIcon from '@material-ui/icons/Delete';
import {FixedSizeList} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import history from '../../common/history'

const useStyles = makeStyles((theme) => ({
    root: {},
    fab: {
        position: 'fixed',
        bottom: theme.spacing(5),
        right: theme.spacing(4),
    },
    listContainer: {
        // backgroundColor: 'red',
        height: '85vh'
    }
}))


const VirtualizedListItem = ({index, style, data}) => {
    // https://github.com/mui-org/material-ui/issues/16026

    const song = data[index]

    return <ListItem
        key={index}
        button
        ContainerProps={{style: style}}
        ContainerComponent="div"
    >
        <ListItemIcon>
            {song.favor
                ? <FavoriteIcon/>
                : <FavoriteBorderIcon/>}

        </ListItemIcon>

        <ListItemText component={Link} to={"/card/" + song._id}
                      primary={song.name}
                      onClick={() => history.push("/card/" + song._id + '/' + index)}
        />

        <ListItemSecondaryAction onClick={()=>alert('!')}>
            <IconButton edge="end" aria-label="delete">
                <DeleteIcon/>
            </IconButton>
        </ListItemSecondaryAction>

    </ListItem>
}

const WindowsList = (props) => {

    const listRef = React.createRef();

    const offset = () =>{
        alert(props.lastSongIndex)
        listRef.current.scrollToItem(parseInt(props.lastSongIndex), "start")
    }

    return (
        <>
            <Button variant="contained" onClick={offset}>Default</Button>
            <AutoSizer>
                {({height, width}) => {
                    return (
                        <FixedSizeList
                            ref={listRef}
                            itemData={props.songs}
                            itemCount={props.songs.length}
                            overscanCount={20}
                            height={height}
                            width={width}
                            itemSize={48}
                            initialScrollOffset={parseInt(props.lastSongIndex)}
                        >
                            {VirtualizedListItem}
                        </FixedSizeList>)
                }}
            </AutoSizer>
        </>)

}


export const SongList = ({songs, isLoading, lastSongIndex}) => {

    const styles = useStyles()

    if (isLoading) {
        return <Spinner/>
    }
    return (

        <Container className={styles.listContainer}>

            <Typography variant={"h4"}>
                All songs
            </Typography>

            {/*<List>*/}
            {/*    {songs.map(item => <SongListItem song={item} key={item._id}/>)}*/}
            {/*</List>*/}

            <WindowsList songs={songs}
                         lastSongIndex={lastSongIndex}/>

            <Fab component={NavLink} to={'/new'} className={styles.fab} color="primary" aria-label="add">
                <AddIcon/>
            </Fab>

        </Container>

    )
}

//
// const SongListItem = ({song}) => {
//
//     return <ListItem
//         button
//     >
//         <ListItemIcon>
//             {song.favor
//                 ? <FavoriteIcon/>
//                 : <FavoriteBorderIcon/>}
//
//         </ListItemIcon>
//
//         <ListItemText button
//                       component={Link}
//                       to={"/card/" + song._id}
//                       primary={song.name}
//         />
//
//         {/*<ListItemSecondaryAction button onClick={()=>alert('111')}>*/}
//         {/*    <IconButton edge="end" aria-label="delete" onClick={()=>alert('111')}>*/}
//         {/*        <DeleteIcon onClick={()=>alert('111')}/>*/}
//         {/*    </IconButton>*/}
//         {/*</ListItemSecondaryAction>*/}
//     </ListItem>
//
// }


export default SongList

