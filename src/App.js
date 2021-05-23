import {
    Switch,
    Route
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

function App() {
    return (
        <Switch>
            <Route path="/signin">
                <SignIn/>
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}

export default App;
