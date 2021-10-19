import React from 'react';
import st from './gameInput.module.css'

export const GameInput = (props) => {
    return (
        <div className={st.wrapper}>
            <label className={st.label} htmlFor="">
                {props.side}{props.required ? <span className={st.redStar}>*</span> : null}
            </label>
            <input
                required={props.required}
                value={props.sideValue}
                className={st.input}
                type={props.type}
                onChange={e => props.setSide(e.target.value)}
                placeholder={props.placeholder}
            />
        </div>

    );
};

