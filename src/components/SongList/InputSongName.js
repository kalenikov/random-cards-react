import React from "react";

const InputSongName = (props) => {
  return (
    <input
      className="form-control mb-2"
      placeholder="Enter song name"
      onChange={(e) => props.setTerm(e.currentTarget.value)}
      value={props.term}
    />
  );
};

export default InputSongName;
