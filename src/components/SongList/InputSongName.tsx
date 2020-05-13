import React from 'react'

type InputSongNamePropsType = {
    term: string;
    setTerm: (term: string) => void;
}

const InputSongName = (props: InputSongNamePropsType): any => {
    return (
        <input
            className="form-control mb-2"
            placeholder="Enter song name"
            onChange={(e) => props.setTerm(e.currentTarget.value)}
            value={props.term}
        />
    )
}

export default InputSongName
