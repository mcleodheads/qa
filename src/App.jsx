import './App.css';
import AppRoute from "./components/AppRoute";
import Header from "./components/Header";
import {useHistory} from "react-router-dom";

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
