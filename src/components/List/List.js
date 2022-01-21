import React from "react";
import Spinner from "../Spinner/Spinner.js";

export function SongList(props) {

  if (props.isLoading) {
    return <Spinner/>;
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


export default SongList;
