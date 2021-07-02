import {
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import {useCallback, useEffect} from "react";
import {AuthApi} from "./services/api/authApi";
import {setUserAC} from "./store/ducks/user/actionCreator";
import {useDispatch, useSelector} from "react-redux";
import {isAuthUser} from "./store/ducks/user/selectors";

function App() {
    const dispatch = useDispatch();
    const history = useHistory();
    const isAuth = useSelector(isAuthUser);

    const checkAuth = useCallback( async () => {
        try {
            const data = await AuthApi.getUserProfile();
            dispatch(setUserAC(data));
        } catch (error) {
            console.log(error);
        }
    }, [dispatch]);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    useEffect(() => {
        isAuth && history.replace('/home');
    }, [isAuth, history]);

    return (
        <Switch>
            <Route path="/auth">
                <Auth/>
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}

export default App;
