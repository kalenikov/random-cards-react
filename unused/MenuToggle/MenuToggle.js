import React from "react"
import classes from "./MenuToggle.module.css"

const MenuToggle = props => {
    const cls = [
        classes.MenuToggle,
        "material-icons",
    ]

    if (props.isOpen) {
        cls.push(classes.open)
    }

    return (
        <div className={classes.MenuToggle} onClick={props.onToggle}>
            {props.isOpen
                ? <i className={cls.join(" ")}>close</i>
                : <i className={cls.join(" ")}>apps</i>}
        </div>
    )
}

export default MenuToggle
