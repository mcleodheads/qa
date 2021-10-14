import React from 'react';
import st from '../assets/styles/homeScreen.module.css'
import {GAME_ROUTE} from "../utils/paths";
import {useHistory} from "react-router-dom";

const HomeScreen = () => {
    const history = useHistory()

    return (
        <div className={st.wrapper}>
            <div className={st.container}>
                <div className={st.content}>
                    <div className={st.header}>
                        Тренажер “Треугольники”
                    </div>
                    <div className={st.body}>
                        В отличие от тестов, здесь вы можете применить свои знания на практике.
                        Этот<br/> тренажер эмулирует популярную среду для тестирования.<br/>
                        Можете попробовать свои силы, найти все баги и все кейсы, которые мы туда<br/>
                        запрятали.<br/>
                        Успехов! :)
                    </div>
                    <button className={st.action} onClick={() => history.push(GAME_ROUTE)}>
                        <span className={st.innerBtn}>Запустить тренажер</span>
                    </button>
                </div>
                <div className={st.triangle}></div>
            </div>
        </div>
    );
};

export default HomeScreen;