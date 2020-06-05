import React, {useState, useEffect, useContext} from "react";
import createAuth0Client from "@auth0/auth0-spa-js";


export const Auth0Context = React.createContext();

export const useAuth0 = () => useContext(Auth0Context);

export const Auth0Provider = ({
                                  children,
                                  onRedirectCallback = () => window.history.replaceState({}, document.title, window.location.pathname),
                                  ...initOptions
                              }) => {
    const [isAuthenticated, setIsAuthenticated] = useState();
    const [user, setUser] = useState();
    const [auth0Client, setAuth0Client] = useState();
    const [loading, setLoading] = useState(true);
    const [popupOpen, setPopupOpen] = useState(false);

    useEffect(() => {
        const initAuth0 = async () => {
            const createdAuth0Client = await createAuth0Client(initOptions);
            setAuth0Client(createdAuth0Client);

            if (window.location.search.includes("code=") &&
                window.location.search.includes("state=")) {
                const {appState} = await createdAuth0Client.handleRedirectCallback();
                onRedirectCallback(appState);
            }

            const isAuthenticated = await createdAuth0Client.isAuthenticated();

            setIsAuthenticated(isAuthenticated);

            if (isAuthenticated) {
                const user = await createdAuth0Client.getUser();
                setUser(user);
                const claims = await createdAuth0Client.getIdTokenClaims();
                const token = await createdAuth0Client.getTokenSilently();
                localStorage.setItem('TOKEN', token)
                // localStorage.setItem('TOKEN_ALL', claims.__raw)
            }

            setLoading(false);
        };
        initAuth0();
    }, []);

    const loginWithPopup = async (params = {}) => {
        setPopupOpen(true);
        try {
            await auth0Client.loginWithPopup(params);
        } catch (error) {
            console.error(error);
        } finally {
            setPopupOpen(false);
        }
        const user = await auth0Client.getUser();
        setUser(user);
        setIsAuthenticated(true);
    };

    const handleRedirectCallback = async () => {
        setLoading(true);
        await auth0Client.handleRedirectCallback();
        const user = await auth0Client.getUser();
        setLoading(false);
        setIsAuthenticated(true);
        setUser(user);
    };
    return (
        <Auth0Context.Provider
            value={{
                isAuthenticated,
                user,
                loading,
                popupOpen,
                loginWithPopup,
                handleRedirectCallback,
                getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
                loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
                getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
                getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
                logout: (...p) => auth0Client.logout(...p)
            }}
        >
            {children}
        </Auth0Context.Provider>
    );
};
