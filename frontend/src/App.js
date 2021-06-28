import {
    Switch,
    Route
} from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

function App() {
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
