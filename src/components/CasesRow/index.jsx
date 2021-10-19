import React from 'react';
import st from './casesRow.module.css'
import classNames from "classnames/bind";

export const CasesRow = ({cases}) => {

    const renderLoop = () => {
        let line = []
        for (let i = 0; i <= 11; i++) {
            const rowClass = classNames(st.case, {[st.active]: cases[i], [st.inactive]: !cases[i]})
            line.push(
                <span
                    key={i}
                    className={rowClass}>
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
