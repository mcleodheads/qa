import * as React from 'react';
import {useHistory, Link} from "react-router-dom";
import st from '../assets/styles/header.module.css'
import {HOME_ROUTE} from "../utils/paths";

const Header = () => {
    const history = useHistory() // history.location.pathname
    const [isVisible, setVisible] = React.useState(true)

    // React.useEffect(() => {
    //     history.listen((location) => {
    //         location.pathname === '/' ? setVisible(true) : setVisible(false)
    //         location.pathname === '/triangles' ? setVisible(true) : setVisible(false)
    //     })
    // }, [])

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