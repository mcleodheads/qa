import * as React from 'react';
import {useState} from "react";
import st from './formScreen.module.css'
import {GameInput} from "../GameInput";
import axios from "axios";

export const FormScreen = () => {
    const [nameTrainee, setNameTrainee] = useState('');
    const [surnameTrainee, setSurnameTrainee] = useState('');
    const [patronymicTrainee, setPatronymicTrainee] = useState('');
    const [universityFullName, setUniversityFullName] = useState();
    const [instituteFullName, setInstituteFullName] = useState();
    const [specialityFullName, setSpecialityFullName] = useState();
    const [competenceName, setCompetenceName] = useState();
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
                <option key={'Java'} value="Java">Java</option>,
                <option key={'AngularJS'} value="AngularJS">AngularJS</option>,
                <option key={'PHP'} value="PHP">PHP</option>,
                <option key={'ReactJS'} value="ReactJS">ReactJS</option>,
                <option key={'.NET'} value=".NET">.NET</option>,
                )
        }
        if (competenceName === 'Тестирование') {
            list.push(
                <option key={'Ручное тестирование'} value="Ручное тестирование">Ручное тестирование</option>,
                <option key={'Автотесты'} value="Автотесты">Автотесты</option>,
            )
        }
        return list
    }

    return (
        <div className={st.wrapper}>
            <div className={st.container}>
                <div className={st.description}>
                    <div className={st.descBlock}>
                        ММТР приглашает студентов IT-специальностей средних специальных и высших учебных заведений
                        Костромы и других городов пройти учебную практику, а также выполнить подготовку дипломного
                        проекта в нашей компании. Вы будете участвовать в реальных проектах под руководством наших
                        ведущих разработчиков и тестировщиков. График работы на практике гибкий и позволяет совмещать
                        подготовку к экзаменам, учебу и занятость в офисе.
                    </div>
                    <div className={st.descBlock}>
                        В 2017-2018 учебном году в компании ММТР прошли практику 60 студентов 2-4 курсов нескольких
                        факультетов и специальностей КГУ (Физмат, ИАСТ, Бизнес-информатика), Костромского
                        политехнического колледжа, Костромского энергетического техникума имени Ф. В. Чижова, а также 1
                        студент из Ивановского энергетического университета (Прикладная информатика). 8 выпускников и 3
                        студента 3 курса были приняты на работу.
                    </div>
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
                                            <option value="Тестирование">
                                                Тестирование
                                            </option>
                                            <option value="Разработка">
                                                Разработка
                                            </option>
                                            <option value="Сопровождение">
                                                Сопровождение
                                            </option>
                                            <option value="Дизайн">
                                                Дизайн
                                            </option>
                                            <option value="Системное администрирование">
                                                Системное администрирование
                                            </option>
                                            <option value="Системный анализ">
                                                Системный анализ
                                            </option>
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
                                            onChange={() => {}}
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
                                    <input type="checkbox" defaultChecked={policyCheckbox} onChange={(e) => setPolicyCheckbox(e.target.checked)}/>
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

