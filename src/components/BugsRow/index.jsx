import React from 'react';

import classNames from "classnames/bind";

import st from './bugsRow.module.css'

export const BugsRow = ({bugs}) => {

    const renderLoop = () => {
        let line = []
        for (let i = 0; i <= 3; i++) {
            const rowClass = classNames(st.bug, {[st.active]: bugs[i], [st.inactive]: !bugs[i]})
            line.push(
                <span
                    key={i}
                    className={rowClass}>
                    {bugs[i] ? (bugs[i]) : ('??? ?? ???')}
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
