import React from 'react';
import st from '../assets/styles/homeScreen.module.css'

const HomeScreen = () => {
    return (
        <div className={st.wrapper}>
            <div className={st.container}>
                <div className={st.content}>
                    <div className={st.header}>

                    </div>
                    <div className={st.body}>

                    </div>
                    <div className={st.action}>
                        <button></button>
                    </div>
                </div>
                <div className={st.triangle}></div>
            </div>
        </div>
    );
};

export default HomeScreen;