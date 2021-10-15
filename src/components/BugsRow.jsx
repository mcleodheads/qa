import React from 'react';
import st from '../assets/styles/bugsRow.module.css'

const BugsRow = () => {
    return (
        <div>
            <span className={st.bug}>
                Баг - ??? ?? ???
            </span>
            <span className={st.bug}>
                Баг - ??? ?? ???
            </span>
            <span className={st.bug}>
                Баг - ??? ?? ???
            </span>
            <span className={st.bug}>
                Баг - ??? ?? ???
            </span>
        </div>
    );
};

export default BugsRow;