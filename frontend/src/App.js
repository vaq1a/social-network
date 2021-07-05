import {
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import {useEffect} from "react";
import {fetchUserDataAC} from "./store/ducks/user/actionCreator";
import {useDispatch, useSelector} from "react-redux";
import {isAuth, isUserLoadingState} from "./store/ducks/user/selectors";
import {LoadingState} from "./store/ducks/user/contracts/state";

function App() {
    const dispatch = useDispatch();
    const history = useHistory();

    const isAuthUser = useSelector(isAuth);
    const isLoadingStateUser = useSelector(isUserLoadingState);

    const isReady = isLoadingStateUser !== LoadingState.NEVER &&
                    isLoadingStateUser !== LoadingState.LOADING;


    useEffect(() => {
        dispatch(fetchUserDataAC());
    }, [dispatch]);

    useEffect(() => {
        if (!isAuthUser && isReady) {
            history.push('/auth');
        } else {
            history.push('/home');
        }
    }, [isAuthUser, isReady, history]);

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
