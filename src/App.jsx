import AppRoute from "./router/AppRoute";
import {Header} from "./components/Header/index";

import './App.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <AppRoute />
        </div>
    );
}

export default App;
