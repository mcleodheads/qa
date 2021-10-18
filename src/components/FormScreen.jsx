import * as React from 'react';
import st from '../assets/styles/formScreen.module.css'
import GameInput from "./GameInput";
import Recaptcha from 'react-recaptcha'

const FormScreen = () => {
    const [dateStart, setDateStart] = React.useState('')
    const [dateEnd, setDateEnd] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [email, setEmail] = React.useState('')
    return (
        <div className={st.wrapper}>
            <div className={st.container}>
                <div className={st.description}>
                    <div className={st.descBlock}>
                        ММТР приглашает студентов IT-специальностей средних специальных и высших учебных заведений Костромы и других городов пройти учебную практику, а также выполнить подготовку дипломного проекта в нашей компании. Вы будете участвовать в реальных проектах под руководством наших ведущих разработчиков и тестировщиков. График работы на практике гибкий и позволяет совмещать подготовку к экзаменам, учебу и занятость в офисе.
                    </div>
                    <div className={st.descBlock}>
                        В 2017-2018 учебном году в компании ММТР прошли практику 60 студентов 2-4 курсов нескольких факультетов и специальностей КГУ (Физмат, ИАСТ, Бизнес-информатика), Костромского политехнического колледжа, Костромского энергетического техникума имени Ф. В. Чижова, а также 1 студент из Ивановского энергетического университета (Прикладная информатика). 8 выпускников и 3 студента 3 курса были приняты на работу.
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
                                    side={'Фамилия '}
                                    required
                                    placeholder={'Введите фамилию'}
                                />
                                <GameInput
                                    side={'Имя '}
                                    required
                                    placeholder={'Введите имя'}
                                />
                                <GameInput
                                    side={'Отчество '}
                                    required
                                    placeholder={'Введите отчество'}
                                />
                            </div>
                            <div className={st.education}>
                                <GameInput
                                    side={'Учебное заведение '}
                                    required
                                    placeholder={'Введите учебное заведение'}
                                />
                                <GameInput
                                    side={'Факультет '}
                                    required
                                    placeholder={'Введите факультет'}
                                />
                                <GameInput
                                    side={'Специальность '}
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
                                            defaultValue={'Желаемое направление деятельности'}
                                            className={st.dropDown}
                                            name="jobs"
                                            id="jobs"
                                        >
                                            <option value="analytics">
                                                Аналитика
                                            </option>
                                            <option value="QA">
                                                Тестирование
                                            </option>
                                            <option value="Development">
                                                Разработка
                                            </option>
                                        </select>
                                    </div>
                                    <div className={st.jobsInput}>
                                        <label
                                            htmlFor="jobs"
                                            className={st.label}
                                        >
                                            Желаемая компетенция:
                                        </label>
                                        <select
                                            defaultValue={"Выберите желаемую компетенцию"}
                                            className={st.dropDown}
                                            name=""
                                            id=""
                                        >
                                            <option value="analytics">
                                                Аналитика
                                            </option>
                                            <option value="QA">
                                                Тестирование
                                            </option>
                                            <option value="Development">
                                                Разработка
                                            </option>
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
                                        setSide={setPhoneNumber}
                                        side={'Номер телефона'}
                                        placeholder={'Введите номер телефона'}
                                    />
                                    <GameInput
                                        required
                                        setSide={setEmail}
                                        type={'email'}
                                        side={'E-mail'}
                                        placeholder={'Введите E-mail'}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={st.actions}>
                            <div className={st.capcha}>
                                <Recaptcha
                                    sitekey=" "
                                />
                            </div>
                            <div className={st.privatePolicy}>
                                <label className={st.label}>
                                    Политика персональных данных<span className={st.star}>*</span>
                                </label>
                                <div>
                                    <input type="checkbox"/>
                                    <span>С <a href='/#' className={st.policy}>политикой</a> в отношении обработки персональных данных ознакомлен</span>
                                </div>
                            </div>
                            <div className={st.btnBlock}>
                                <button className={st.btn}>
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

export default FormScreen;