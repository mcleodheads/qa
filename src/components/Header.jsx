import * as React from 'react';
import {Link, useLocation} from "react-router-dom";
import st from '../assets/styles/header.module.css'
import {FORM_ROUTE, GAME_ROUTE, HOME_ROUTE, RESULTS_ROUTE} from "../utils/paths";

const Header = () => {
    const [isVisible, setVisible] = React.useState(true)
    const location = useLocation()

    React.useEffect(() => {
        switch (location.pathname) {
            case HOME_ROUTE:
                setVisible(false)
                break
            case GAME_ROUTE:
                setVisible(true)
                break
            case RESULTS_ROUTE:
                setVisible(true)
                break
            case FORM_ROUTE:
                setVisible(false)
                break
            default:
                break
        }
    }, [location.pathname])

    return (
        <div className={st.wrapper}>
            <div className={st.actions}>
                <div className={st.logo}></div>
                {
                    isVisible ? (
                        <Link to={HOME_ROUTE}>
                            <button className={st.button}>
                        <span className={st.btnInner}>
                            Завершить
                        </span>
                            </button>
                        </Link>
                    ) : null
                }
            </div>
        </div>
    );
};

export default Header;