import React from 'react';
import axios from "axios";

import {useState} from "react";

import {GameInput} from "../GameInput";
import {data, devOptions, qaOptions, selectOptions} from "./data";

import st from './formScreen.module.css'

export const FormScreen = () => {
    const [nameTrainee, setNameTrainee] = useState('');
    const [surnameTrainee, setSurnameTrainee] = useState('');
    const [patronymicTrainee, setPatronymicTrainee] = useState('');
    const [universityFullName, setUniversityFullName] = useState();
    const [instituteFullName, setInstituteFullName] = useState();
    const [specialityFullName, setSpecialityFullName] = useState();
    const [competenceName, setCompetenceName] = useState();
    const [type, setType] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [phoneNumberTrainee, setPhoneNumberTrainee] = useState('');
    const [emailTrainee, setEmailTrainee] = useState('');
    const [policyCheckbox, setPolicyCheckbox] = useState(false);

    const handleSubmit = () => {
        const newData = {
            nameTrainee: nameTrainee,
            surnameTrainee: surnameTrainee,
            patronymicTrainee: patronymicTrainee,
            universityFullName: universityFullName,
            instituteFullName: instituteFullName,
            specialityFullName: specialityFullName,
            competenceName: competenceName,
            dateStart: dateStart,
            dateEnd: dateEnd,
            type: type,
            phoneNumberTrainee: phoneNumberTrainee,
            emailTrainee: emailTrainee,
        }
        if (policyCheckbox) {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer cRL82peZNMsLBKPrDkHVi7b12CAKLWZY',
            }
            axios.post('/api/request/fromMMTR', newData, {
                    headers: headers,
                }
            )
                .then((response) => console.log(response))
                .catch((error) => console.log(error))
        }
    }

    const compet = () => {
        const list = []
        if (competenceName === 'Разработка') {
            list.push(
                devOptions.map(({key, text}) => (
                    <option key={key} value={text}>{text}</option>
                ))
            )
        }
        if (competenceName === 'Тестирование') {
            list.push(
                qaOptions.map(({key, text}) => (
                    <option key={key} value={text}>{text}</option>
                ))
            )
        }
        return list
    }

    return (
        <div className={st.wrapper}>
            <div className={st.container}>
                <div className={st.description}>
                    {
                        data.map(({key, text}) => (
                            <div key={key} className={st.descBlock}>
                                {text}
                            </div>
                        ))
                    }
                </div>
                <div className={st.formWrapper}>
                    <div className={st.header}>
                        Отправьте заявку на прохождение практики в компании «ММТР»
                    </div>
                    <div className={st.form}>
                        <div className={st.personBlock}>
                            <div className={st.name}>
                                <GameInput
                                    setSide={setSurnameTrainee}
                                    side={'Фамилия'}
                                    required
                                    placeholder={'Введите фамилию'}
                                />
                                <GameInput
                                    setSide={setNameTrainee}
                                    side={'Имя'}
                                    required
                                    placeholder={'Введите имя'}
                                />
                                <GameInput
                                    setSide={setPatronymicTrainee}
                                    side={'Отчество'}
                                    required
                                    placeholder={'Введите отчество'}
                                />
                            </div>
                            <div className={st.education}>
                                <GameInput
                                    setSide={setUniversityFullName}
                                    side={'Учебное заведение'}
                                    required
                                    placeholder={'Введите учебное заведение'}
                                />
                                <GameInput
                                    setSide={setInstituteFullName}
                                    side={'Факультет'}
                                    required
                                    placeholder={'Введите факультет'}
                                />
                                <GameInput
                                    setSide={setSpecialityFullName}
                                    side={'Специальность'}
                                    required
                                    placeholder={'Введите специальность'}
                                />
                            </div>
                        </div>
                        <div className={st.requestBlock}>
                            <div className={st.vacancy}>
                                <div className={st.reqHeader}>
                                    Предполагаемая деятельность
                                </div>
                                <div className={st.inputs}>
                                    <div className={st.jobsInput}>
                                        <label
                                            className={st.label}
                                            htmlFor="jobs"
                                        >
                                            Желаемое направление деятельности <span className={st.star}>*</span>:
                                        </label>
                                        <select
                                            onChange={(e) => setCompetenceName(e.target.value)}
                                            className={st.dropDown}
                                            name="jobs"
                                            id="jobs">
                                            <option value="" disabled selected>
                                                Выберите желаемое направление
                                            </option>
                                            {
                                                selectOptions.map(({key, text}) => (
                                                    <option key={key} value={text}>
                                                        {text}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className={st.jobsInput}>
                                        <label
                                            htmlFor="jobs"
                                            className={st.label}>
                                            Желаемая компетенция:
                                        </label>
                                        <select
                                            defaultValue={"Выберите желаемую компетенцию"}
                                            onChange={(e) => setType(e.target.value)}
                                            className={st.dropDown}
                                        >
                                            <option value="" disabled selected>
                                                Выберите желаемую компетенцию
                                            </option>
                                            {compet()}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className={st.date}>
                                <div className={st.reqHeader}>
                                    Предполагаемые сроки практики
                                </div>
                                <div className={st.inputs}>
                                    <GameInput
                                        type={'date'}
                                        required
                                        setSide={setDateStart}
                                        side={'Дата начала практики '}
                                        placeholder={'Выберите дату начала'}
                                    />
                                    <GameInput
                                        type={'date'}
                                        required
                                        setSide={setDateEnd}
                                        side={'Дата окончания практики '}
                                        placeholder={'Выберите дату окончания'}
                                    />
                                </div>
                            </div>
                            <div className={st.feedback}>
                                <div className={st.reqHeader}>
                                    Данные для связи
                                </div>
                                <div className={st.inputs}>
                                    <GameInput
                                        required
                                        type={'tel'}
                                        setSide={setPhoneNumberTrainee}
                                        side={'Номер телефона'}
                                        placeholder={'Введите номер телефона'}
                                    />
                                    <GameInput
                                        required
                                        setSide={setEmailTrainee}
                                        type={'email'}
                                        side={'E-mail'}
                                        placeholder={'Введите E-mail'}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={st.actions}>
                            <div className={st.captcha}>

                            </div>
                            <div className={st.privatePolicy}>
                                <label className={st.label}>
                                    Политика персональных данных<span className={st.star}>*</span>
                                </label>
                                <div>
                                    <input type="checkbox" defaultChecked={policyCheckbox}
                                           onChange={(e) => setPolicyCheckbox(e.target.checked)}/>
                                    <span>С <a href='/#' className={st.policy}>политикой</a> в отношении обработки персональных данных ознакомлен</span>
                                </div>
                            </div>
                            <div className={st.btnBlock}>
                                <button
                                    className={st.btn}
                                    onClick={handleSubmit}
                                    disabled={!policyCheckbox}
                                >
                                    <span className={st.innerBtn}>
                                        Отправить
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

