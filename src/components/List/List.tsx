import React from 'react'
import { ListType } from '../../constants/types';
import Spinner from "../Spinner/Spinner"

export function SongList(props: any): any {

    if (props.isLoading) {
        return <Spinner/>
    }

    // return <>
    //     <h1>My lists</h1>
    //     <ListGroup>
    //         {props.lists.map((list: ListType) =>
    //             <ListGroup.Item action key={list._id}>
    //                 {list.name}
    //             </ListGroup.Item>
    //         )}
    //     </ListGroup>
    // </>
}


export default SongList
