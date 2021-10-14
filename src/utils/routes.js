import {FORM_ROUTE, GAME_ROUTE, HOME_ROUTE, RESULTS_ROUTE} from "./paths";
import Home from "../pages/Home";
import Game from "../pages/Game";
import Results from "../pages/Results";
import Form from "../pages/Form";

export const routes = [
    {
        path: HOME_ROUTE,
        component: Home,
    },
    {
        path: GAME_ROUTE,
        component: Game,
    },
    {
        path: RESULTS_ROUTE,
        component: Results,
    },
    {
        path: FORM_ROUTE,
        component: Form,
    },
]