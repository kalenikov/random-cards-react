import React, {FC, useState} from "react";
import {NavLink} from 'react-router-dom'

type HeaderPropsType = {
    getSongsList: () => void
    toogleGetOnlyFavor: () => void
    getSongByRandomThunkLocal: (history: any) => void
    history: any
    getOnlyFavor: boolean
}


const HeaderOld: FC<HeaderPropsType> = (props: HeaderPropsType) => {

    const shuffle = () => {
        props.getSongByRandomThunkLocal(props.history)
    }

    const update = () => {
        props.getSongsList()
        props.history.push('/cards')
    }

    return (

        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo"><i className="material-icons">cloud</i>Logo</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="#"><i className="material-icons">search</i></a></li>
                    <li><a href="#"><i className="material-icons">view_module</i></a></li>
                    <li><a href="#"><i className="material-icons">refresh</i></a></li>
                    <li><a href="#"><i className="material-icons">more_vert</i></a></li>
                </ul>
            </div>
        </nav>


        // <nav>
        //     <div className="nav-wrapper">
        //         <ul className="right hide-on-med-and-down">
        //             <a href="/" className="brand-logo">Logo</a>
        //             {/*<li onClick={props.toogleGetOnlyFavor}>*/}
        //             {/*    ? <i className="material-icons">radio_button_checked</i>*/}
        //             {/*    : <i className="material-icons">radio_button_unchecked</i>}*/}
        //             {/*</li>*/}
        //
        //             <li onClick={update}>
        //                 All songs
        //             </li>
        //
        //             <li onClick={shuffle}>
        //                 SHUFFLE
        //             </li>
        //
        //             <li><a href="#"><i className="material-icons">refresh</i></a></li>
        //
        //         </ul>
        //     </div>
        // </nav>
    )
}

export default HeaderOld



