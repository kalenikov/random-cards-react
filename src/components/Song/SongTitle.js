import { Container, IconButton, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { bindPopper, usePopupState } from "material-ui-popup-state/hooks";
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import history from "../../common/history";

const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

const useStyles = makeStyles((theme) => ({
    paper: {
        border: "1px solid",
        top: "20px",
        left: "20px",
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper
    },
    typography: {
        padding: theme.spacing(1),
        opacity: 0.5
    }
}));

const SongTitle = (props) => {
    const { id } = useParams();

    const styles = useStyles();
    const popupState = usePopupState({
        variant: "popper",
        popupId: "favorPopper"
    });
    const favorIconRef = useRef();
    const currentFavor = props.song.favor;
    const prevFavor = usePrevious(currentFavor);
    const prevId = usePrevious(id);

    popupState.setAnchorEl(favorIconRef.current);

    useEffect(() => {
        if (
            prevFavor !== undefined &&
            id === prevId &&
            currentFavor !== prevFavor
        ) {
            popupState.open();
            setTimeout(() => {
                popupState.close();
            }, 2000);
        }
    }, [id, currentFavor]);

    const deleteSongHandler = () => {
        const isDelete = window.confirm("Delete this song?");
        if (isDelete) {
            props.deleteSongThunk(props.song.id, history);
        }
    };

    return (
        <Container>
            <Typography variant={"h6"} noWrap>
                {props.song.name + (props.editMode ? " (редактирование)" : "")}
            </Typography>
            <Typography variant={"caption"}>
                {`last seen: ${new Date(
                    props.song.time_last_seen
                ).toLocaleDateString()}`}
            </Typography>

            <Popper anchorEl={favorIconRef} {...bindPopper(popupState)}>
                <Paper>
                    <Typography className={styles.typography}>
                        {props.song.favor
                            ? "Song add to favor"
                            : "Song deleted from favor"}
                    </Typography>
                </Paper>
            </Popper>

            <IconButton
                ref={favorIconRef}
                onClick={() =>
                    props.toogleFavorThunk(props.song.id, props.song.favor)
                }
            >
                {props.song.favor ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
            </IconButton>

            <IconButton onClick={deleteSongHandler}>
                <DeleteIcon/>
            </IconButton>

            <IconButton
                onClick={() =>
                    props.toogleHideThunk(props.song.id, props.song.hide)
                }
            >
                {props.song.hide ? <VisibilityOffIcon/> : <VisibilityIcon/>}
            </IconButton>
        </Container>
    );
};

export default SongTitle;
