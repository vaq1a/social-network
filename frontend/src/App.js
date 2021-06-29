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
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();
    const history = useHistory();

    const checkAuth = useCallback( async () => {
        try {
            const data = await AuthApi.getUserProfile();
            dispatch(setUserAC(data));
            history.replace('/home');
        } catch (error) {
            console.log(error);
        }
    }, [dispatch, history]);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

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
