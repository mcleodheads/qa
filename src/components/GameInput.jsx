import React from 'react';
import st from '../assets/styles/gameInput.module.css'

const GameInput = (props) => {
    return (
        <div className={st.wrapper}>
            <label className={st.label} htmlFor="">
                {props.side}{props.required ? <span className={st.redStar}>*</span> : null}
            </label>
            <input
                aria-required={props.required}
                value={props.sideValue}
                className={st.input}
                type={props.type}
                required={props.side === 'C'}
                onChange={e => props.setSide(e.target.value)}
                placeholder={props.placeholder}
            />
        </div>

    );
};

export default GameInput;