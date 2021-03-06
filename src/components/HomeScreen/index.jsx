import React from 'react';
import {useHistory} from "react-router-dom";

import {GAME_ROUTE} from "../../router/paths";

import st from './homeScreen.module.css'

export const HomeScreen = () => {
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

