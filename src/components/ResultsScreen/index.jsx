import React from 'react';
import {useHistory} from "react-router-dom";

import {FORM_ROUTE} from "../../router/paths";
import {dataBugs, dataCases} from "./data";

import st from './resultsScreen.module.css'

export const ResultsScreen = () => {
    const history = useHistory();

    return (
        <div className={st.wrapper}>
            <div className={st.container}>
                <div className={st.header}>
                    Разбор тренажера "Труегольники"
                </div>
                <div className={st.triangleImg}>
                </div>
                <div className={st.description}>
                    В тренажере было два типа задач: проверить 12 тест-кейсов из тех, что мы задумали, и найти 4 спрятанных бага.<br/>
                    Как это обычно и бывает, багов оказалось больше, и многие их нашли и прислали репорты. Спасибо вам! Но обо всем по порядку.
                </div>
                <div className={st.casesWrapper}>
                    <div className={st.casesHeader}>
                        Кейсы
                    </div>
                    <div className={st.casesDescription}>
                        Кейсов у нас было задумано 12.
                    </div>
                    <div className={st.caseList}>
                        {
                            dataCases.map(({key, text}) => (
                                <div key={key} className={st.singleCase}>
                                    <div className={st.number}>{key}</div>
                                    <div className={st.case}>
                                        {text}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={st.bugsWrapper}>
                    <div className={st.casesHeader}>
                        Баги
                    </div>
                    <div className={st.casesDescription}>
                        Мы спрятали 4 бага.
                    </div>
                    <div className={st.caseList}>
                        {
                            dataBugs.map(({key, text}) => (
                                <div key={key} className={st.singleCase}>
                                    <div className={st.number}>{key}</div>
                                    <div className={st.case}>
                                        {text}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={st.footerImg}>
                </div>
                <div className={st.action}>
                    <button
                        className={st.btn}
                        onClick={() => history.push(FORM_ROUTE)}
                    >
                        <span className={st.innerBtn}>
                            Записаться на практику
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultsScreen;