import React from 'react';
import st from '../assets/styles/gameInput.module.css'

const GameInput = (props) => {
    return (
        <div className={st.wrapper}>
            <label className={st.label} htmlFor="">
                Сторона {props.side}
            </label>
            <input
                value={props.sideValue}
                className={st.input}
                type={'text'}
                required={props.side === 'C'}
                onChange={e => props.setSide(e.target.value)}
                placeholder={'Введите значение'}
            />
        </div>

    );
};

export default GameInput;