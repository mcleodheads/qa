import React from 'react';
import st from '../assets/styles/bugsRow.module.css'

const BugsRow = ({bugs}) => {

    const renderLoop = () => {
        let line = []
        for (let i = 0; i <= 3; i++) {
            line.push(
                <span
                    key={i}
                    className={`${st.bug} ${bugs[i] ? st.active : st.inactive}`}>
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

export default BugsRow;