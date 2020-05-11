import React, {Component} from "react"
import {connect} from "react-redux"
import Drawer from "../Drawer/Drawer"
import MenuToggle from "../MenuToggle/MenuToggle"
import Navbar from "../Navbar/Navbar"
import classes from "./Layout.module.css"

class Layout extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render() {
        return (
            <div className={classes.Layout}>

                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.menuCloseHandler}
                />

                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />

                <Navbar/>

                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout
