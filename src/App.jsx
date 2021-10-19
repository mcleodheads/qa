import './App.css';
import AppRoute from "./router/AppRoute";
import {useHistory} from "react-router-dom";
import {Header} from "./components/Header/index";

function App() {
    const history = useHistory()
    return (
        <div className="App">
            <Header history={history}/>
            <AppRoute />
        </div>
    );
}

export default App;
