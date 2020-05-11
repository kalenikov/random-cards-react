import "materialize-css/dist/css/materialize.min.css"
import M from 'materialize-css';
import React, {useRef} from "react"

// https://materializecss.com/sidenav.html
// https://github.com/AndyBraveMX/react-learning/tree/master/react-sidenav-materializecss
// http://react-materialize.github.io/react-materialize/?path=/story/javascript-sidenav--default
// https://stackoverflow.com/questions/35499842/how-to-use-materialize-css-with-react
export class Sidenav1 extends React.Component {


    componentDidMount() {
        M.Sidenav.init(this.sidenav);

        // let elem = document.querySelector(".sidenav")
        // let instance = M.Sidenav.init(elem, {
        //     edge: "left",
        //     inDuration: 250,
        // })

    }

    onClick() {
        let elem = document.querySelector(".sidenav")
        let instance = M.Sidenav.getInstance(elem)
        instance.open()
    }

    render() {

        return (
            <div>
                <nav>
                    <div className="nav-wrapper">

                        <a href="#"
                           onClick={this.onClick}
                           className="button-collapse show-on-large">
                            <i className="material-icons">menu</i>
                        </a>

                        <a href='#' className="brand-logo">
                            RANDOM CARDS
                        </a>

                        {/*<form>*/}
                        {/*    <div className="input-field">*/}
                        {/*        <input id="search" type="search" required/>*/}
                        {/*        <label className="label-icon" htmlFor="search"><i*/}
                        {/*            className="material-icons">search</i></label>*/}
                        {/*        <i className="material-icons">close</i>*/}
                        {/*    </div>*/}
                        {/*</form>*/}

                        {/*<ul className="right hide-on-med-and-down">*/}
                        {/*    <li><a href="sass.html"><i className="material-icons">search</i></a></li>*/}


                        {/*    */}
                        {/*</ul>*/}

                    </div>
                </nav>

                <ul id="slide-out" className="sidenav" ref={ (sidenav) => {this.sidenav = sidenav}} >
                    <li><a className="subheader">Menu</a></li>

                    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li>
                        <div className="divider"/>
                    </li>
                    <li><a className="subheader">LIST</a></li>
                    <li><a className="waves-effect" href="#!">My list</a></li>
                    <li><a className="waves-effect" href="#!">Login</a></li>
                    <li><a className="waves-effect" href="#!">About</a></li>
                </ul>

            </div>

        )
    }
}


