import React from 'react';
import st from '../assets/styles/casesRow.module.css'

const CasesRow = ({cases}) => {

    const renderLoop = () => {
        let line = []
        for (let i = 0; i <= 11; i++) {
            line.push(
                <span
                    key={i}
                    className={`${st.case} ${cases[i] ? st.active : st.inactive}`}>
                    {cases[i] ? (cases[i]) : ('??? ?? ???')}
                </span>
            )
        }
        return line
    }

    return (
        <div className={st.wrapper}>
            {renderLoop()}
        </div>
    );
};

export default CasesRow;