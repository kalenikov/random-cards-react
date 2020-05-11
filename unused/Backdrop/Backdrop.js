import React from "react"
import classes from "./Backdrop.module.css"

const Backdrop = props => {
    return (
        <>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut autem deserunt dicta dignissimos doloremque error fugiat iure iusto laboriosam molestiae, provident quaerat quisquam rem sequi sint soluta tempore ullam.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut autem deserunt dicta dignissimos doloremque error fugiat iure iusto laboriosam molestiae, provident quaerat quisquam rem sequi sint soluta tempore ullam.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut autem deserunt dicta dignissimos doloremque error fugiat iure iusto laboriosam molestiae, provident quaerat quisquam rem sequi sint soluta tempore ullam.
            </div>
            <div className={classes.Backdrop} onClick={props.onClick}/>
        </>
    )
}

export default Backdrop
