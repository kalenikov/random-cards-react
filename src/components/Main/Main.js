import Button from '@material-ui/core/Button'
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import React from "react"
import {useAuth0} from '../Auth0/react-auth0-spa'
// import Jumbotron from "react-bootstrap/Jumbotron";

export const Main = () => {
    const {isAuthenticated, loginWithRedirect, logout, user} = useAuth0()
    return <>
        {/*<CssBaseline/>*/}
        <Container maxWidth="lg">
            <div>
                <h1>Random cards</h1>

                {user &&
                <>
                    <div>Привет, {user.nickname}</div>
                    <div> Мои карточки</div>
                    <div>Тэги</div>
                    <Button variant="outlined"onClick={() => logout()}>
                        Logout
                    </Button>
                </>}

                {!isAuthenticated &&
                <>
                    <div>Вы не авторизованы</div>
                    <Button variant="outlined" onClick={() => loginWithRedirect({})}>
                        Login
                    </Button></>}

            </div>
        </Container>
    </>

}
