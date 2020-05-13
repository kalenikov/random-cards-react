import React, {FC} from 'react'
import {NavLink,} from "react-router-dom";
import s from './SongListItem.module.css'
import {SongType} from "../../../constants/types"

type SongListItemPropsTypes = {
    song: SongType
    setFavor: (id: string, favor: boolean) => void
}

export const SongListItem: FC<SongListItemPropsTypes> = ({song, setFavor}: SongListItemPropsTypes) => {

    return (
        <NavLink to={'/card/' + song._id}>
            <div>
                {song.name}

                {/*<Badge pill variant="success" className={"ml-2"}>{song.count_seen}</Badge>*/}

                <div className={s.lastSeen}> {new Date(song.time_last_seen).toLocaleDateString()}</div>

                <div style={{float: 'right'}} onClick={e => {
                    setFavor(song._id, song.favor)
                    e.preventDefault()
                }}>
                    {/*{song.favor*/}
                    {/*    ? <MdFavorite/>*/}
                    {/*    : <MdFavoriteBorder/>}*/}

                </div>

            </div>
        </NavLink>)
}
