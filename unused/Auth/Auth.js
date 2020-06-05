import React from 'react'
import {withRouter} from 'react-router'
import auth0 from 'auth0-js'

const {Provider, Consumer: AuthConsumer} = React.createContext({
    isAuthorized: false
})

class AuthProvider extends React.Component {
    state = {
        isAuthorized: false
    }

    auth0 = new auth0.WebAuth({
        domain: 'random-cards.auth0.com',
        clientID: '6q6GS1mKNJEvMPJXhRuzTIgirstx0fvh',
        redirectUri: 'http://localhost:3000',
        responseType: 'token id_token',
        scope: 'openid'
    })

    handleAuth = () => {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken) {
                this.setState({isAuthorized: true}, () => {
                    this.props.history.push('/cards')
                })
            } else if (err) {
                console.log(err)
            }
        })
    }

    authorize = () => {
        this.auth0.authorize()
    }

    render() {
        const {isAuthorized} = this.state
        return <Provider value={{isAuthorized, authorize: this.authorize, handleAuth: this.handleAuth}}>
            {this.props.children}
        </Provider>
    }
}

export function withAuth(WrappedComponent) {
    return class AuthHOC extends React.Component {
        render() {
            return (
                <AuthConsumer>
                    {contextProps => (
                        <WrappedComponent {...contextProps} {...this.props}/>
                    )}
                </AuthConsumer>
            )
        }
    }

}

const AuthProviderWithRouter = withRouter(AuthProvider)

export {AuthProviderWithRouter as AuthProvider}

