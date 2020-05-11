import React from "react"

const Navbar = () => {
    return (<>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" data-activates="mobile-demo" className="button-collapse show-on-large"><i
                        className="material-icons">menu</i></a>
                    <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Logo</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#!"><i className="material-icons">search</i></a></li>
                        <li><a href="#"><i className="material-icons">view_module</i></a></li>
                        <li><a href="#"><i className="material-icons">refresh</i></a></li>
                        <li><a href="#"><i className="material-icons">more_vert</i></a></li>
                    </ul>
                </div>
            </nav>

            <ul id="slide-out" className="sidenav">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src="images/office.jpg"/>
                        </div>
                        <a href="#user"><img className="circle" src="images/yuna.jpg"/></a>
                        <a href="#name"><span className="white-text name">John Doe</span></a>
                        <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                    </div>
                </li>
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src="images/office.jpg"/>
                        </div>
                        <a href="#user"><img className="circle" src="images/yuna.jpg"/></a>
                        <a href="#name"><span className="white-text name">John Doe</span></a>
                        <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                    </div>
                </li>
            </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>

        </>

    )
}

export default Navbar
