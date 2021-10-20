import React from 'react';

import {GameInput} from '../GameInput'
import {BugsRow} from '../BugsRow'
import {CasesRow} from '../CasesRow'

import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

import {FORM_ROUTE, RESULTS_ROUTE} from "../../router/paths";

import st from './gameScreen.module.css'
import equilateralTr from '../../assets/img/Triangles/equilateralTr.png'
import isoscelesTr from '../../assets/img/Triangles/isoscelesTr.png'
import rightTr from '../../assets/img/Triangles/rightTr.png'
import angledTr from '../../assets/img/Triangles/angledTr.png'
import errorC from '../../assets/img/Triangles/errorC.png'
import tupougolniy from '../../assets/img/Triangles/tupougolniy.png'

export const GameScreen = () => {
    const history = useHistory();
    const [sideA, setSideA] = useState('');
    const [sideB, setSideB] = useState('');
    const [sideC, setSideC] = useState('');

    const [isVisible, setVisible] = useState(false);
    const [invalidForm, setInvalidForm] = useState(false);

    const [data, setData] = useState({});

    const [cases, setCases] = useState([]);
    const [bugs, setBugs] = useState([]);

    const [xxsAttack, setXxsAttack] = useState('');
    const [isOpen, setOpen] = useState('');

    useEffect(() => {
        if (cases.length === 12 && bugs.length === 4) {
            history.push(FORM_ROUTE)
        }
    }, [history, cases, bugs])

    function getTriangle() {
        setVisible(false)
        setInvalidForm(false)

        function filteredCases(str) {
            if (!cases.includes(str)) {
                setCases(prev => [...prev, str])
            }
        }

        function filteredBugs(str) {
            if (!bugs.includes(str)) {
                setBugs(prev => [...prev, str])
            }
        }

        const sides = [
            sideA,
            sideB,
            sideC,
        ]
        const tr = sides.sort((a, b) => a - b)
        const a = parseInt(tr[0])
        const b = parseInt(tr[1])
        const c = parseInt(tr[2])
        const sum = (Math.pow(a, 2) + Math.pow(b, 2)).toFixed(2);
        const side = Math.pow(c, 2).toFixed(2)

        if (tr[0].length === 0 && tr[1].length === 0 && tr[2].length === 0) {
            setData({
                error: 'Задайте все стороны'
            })
            setInvalidForm(true)
            setVisible(true)
            return filteredCases('Все поля пустые')
        }
        if ((sideA.length === 0 || sideB.length === 0) && sideC.length !== 0) {
            setData({
                error: 'Задайте все стороны'
            })
            setInvalidForm(true)
            setVisible(true)
            return filteredCases('Не все поля заданы')
        }
        if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
            if (sideA.length >= 10 || sideB.length >= 10 || sideC.length >= 10) {
                filteredCases('Большие числа')
            }
            if (sideA.includes('.') || sideB.includes('.') || sideC.includes('.')) {
                return filteredBugs('Нецелые числа')
            }
            if (a === 0 || b === 0 || c === 0) {
                filteredBugs('Треугольник со сторонами 0')
                setData({
                    header: 'Равносторонний треугольник',
                    sides: {sideA, sideB, sideC},
                    img: equilateralTr
                })
                setVisible(true)
            }
            if (a + b < c) {
                setInvalidForm(false)
                setVisible(false)
                return filteredCases('Не выполнились условия треугольника')
            }

            if (a === b && a === c) {
                setData({
                    header: 'Равносторонний треугольник',
                    sides: {sideA, sideB, sideC},
                    img: equilateralTr
                })
                setVisible(true)
                return filteredCases('Равносторонний треугольник')
            }
            if (a === b || a === c || b === c) {
                setData({
                    header: 'Равнобедренный треугольник',
                    sides: {sideA, sideB, sideC},
                    img: isoscelesTr
                })
                setVisible(true)
                return filteredCases('Равнобедренный треугольник')
            }
            if (sum === side) {
                setData({
                    header: 'Прямоугольный треугольник',
                    sides: {sideA, sideB, sideC},
                    img: rightTr
                })
                setVisible(true)
                setInvalidForm(false)
                return filteredCases('Прямоугольный треугольник')
            }
            if (sum < side) {
                setData({
                    header: 'Тупоугольный треугольник',
                    sides: {sideA, sideB, sideC},
                    img: tupougolniy
                })
                setVisible(true)
                setInvalidForm(false)
                return filteredCases('Тупоугольный треугольник')
            }
            if (sum > side) {
                setData({
                    header: 'Остроугольный треугольник',
                    sides: {sideA, sideB, sideC},
                    img: angledTr
                })
                setVisible(true)
                setInvalidForm(false)
                return filteredCases('Остроугольный треугольник')
            }
        }

        if ((sideA.length !== 0 || sideB.length !== 0) && sideC.length === 0) {
            setData({
                error: 'Это не треугольник',
                sides: {sideA, sideB, sideC},
                img: errorC
            })
            setInvalidForm(true)
            setVisible(true)
            return filteredBugs('Форма не валидирует поле С')
        }

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            let result
            const regScript = new RegExp('<[sS][cC][rR][iI][pP][tT]>')
            if (regScript.test(sideA) || regScript.test(sideB) || regScript.test(sideC)) {
                if (sideA.includes('<script>') || sideB.includes('<script>') || sideC.includes('<script>')) {
                    if (sideA.includes('<script>')) {
                        result = sideA.split(/[><]/)
                        setXxsAttack(result[2])
                    }
                    if (sideB.includes('<script>')) {
                        result = sideB.split(/[><]/)
                        setXxsAttack(result[2])
                    }
                    if (sideC.includes('<script>')) {
                        result = sideC.split(/[><]/)
                        setXxsAttack(result[2])
                    }
                    setOpen(true)
                    return filteredCases('XSS - уязвимость')
                }
                if (regScript.test(sideA)) {
                    result = sideA.split(/[><]/)
                    setXxsAttack(result[2])
                }
                if (regScript.test(sideB)) {
                    result = sideB.split(/[><]/)
                    setXxsAttack(result[2])
                }
                if (regScript.test(sideC)) {
                    result = sideC.split(/[><]/)
                    setXxsAttack(result[2])
                }
                setOpen(true)
                return filteredBugs('XSS - уязвимость (регистр)')
            }
            if (sideA.includes('select') ||
                sideA.includes('or') ||
                sideA.includes('where') ||
                sideB.includes('select') ||
                sideB.includes('or') ||
                sideB.includes('where') ||
                sideC.includes('select') ||
                sideC.includes('or') ||
                sideC.includes('where')) {
                return filteredCases('SQL-инъекция')
            }
        }
        if (a.toString.length !== 0 || b.toString.length !== 0 || c.toString.length !== 0) {
            setVisible(false)
            return filteredCases('Строки в полях')
        }
    }

    return (
        <div className={st.wrapper}>
            {
                isOpen ? (
                    <div className={st.xssAttack}>
                        <div className={st.header}>
                            XXS-Атака
                        </div>
                        <div className={st.resultOfAttack}>
                            {xxsAttack}
                        </div>
                        <div className={st.attackActions}>
                            <button className={st.btnAttack} onClick={() => setOpen(false)}>
                                <span className={st.declineInner}>Закрыть</span>
                            </button>
                        </div>
                    </div>
                ) : null
            }
            <div className={st.container}>
                <div className={st.description}>
                    <div className={st.header}>
                        Треугольники
                    </div>
                    <div className={st.body}>
                        <p>На собеседованиях начинающим тестировщикам часто дают задание на проверку работы формы.
                            Одно
                            из наиболее популярных – тестирование программы, которая определяет
                            тип треугольника по трем его сторонам. Каждая из сторон задается в отдельном текстовом
                            поле.</p>
                        <p>Для того, чтобы вы могли потренироваться, мы сделали простой тренажер и спрятали в нем
                            несколько багов. Также он подсчитывает разные варианты кейсов, которые вы
                            можете использовать для тестирования. Естественно, учитываются только самые популярные
                            кейсы
                            – но вы вольны вводить любые данные.</p>
                        <p>Технический момент – учет найденных багов и кейсов ведется на стороне клиента. Текущий
                            результат не сохраняется ни в cookie, ни в storage.
                            Так что при перезагрузке страницы прогресс обнуляется.</p>
                    </div>
                </div>
                <div className={st.actions}>
                    <div className={st.results}>
                        <div className={st.info}>
                            <div className={st.bugs}>
                                <BugsRow bugs={bugs}/>
                            </div>
                            <div className={st.cases}>
                                <CasesRow cases={cases}/>
                            </div>
                        </div>
                        <div className={st.counters}>
                            <div className={st.bugsFinded}>
                                Вы нашли ошибок
                                <span className={st.bugsCounterMore}>{bugs.length}</span>
                            </div>
                            <div className={st.casesFinded}>
                                Попробовали кейсов
                                <span className={st.casesCounterMore}>{cases.length}</span>
                            </div>
                        </div>
                    </div>
                    <div className={st.form_wrapper}>
                        <div className={st.form}>
                            <div className={st.inputs}>
                                <GameInput
                                    side={'Сторона A'}
                                    sideValue={sideA}
                                    setSide={setSideA}
                                    placeholder={'Введите значение'}
                                />
                                <GameInput
                                    side={'Сторона B'}
                                    sideValue={sideB}
                                    setSide={setSideB}
                                    placeholder={'Введите значение'}
                                />
                                <GameInput
                                    side={'Сторона C'}
                                    sideValue={sideC}
                                    setSide={setSideC}
                                    placeholder={'Введите значение'}
                                />
                            </div>
                            <div className={st.btns}>
                                {
                                    bugs.length === 4 && cases.length === 12 ? (
                                        <button
                                            onClick={() => history.push(FORM_ROUTE)}
                                            className={st.push}>
                                            <span className={st.approveInner}>
                                            Дальше
                                            </span>
                                        </button>
                                    ) : (
                                        <button
                                            onClick={getTriangle}
                                            className={st.approve}>
                                            <span className={st.approveInner}>
                                                Проверить
                                            </span>
                                        </button>
                                    )
                                }

                                <button
                                    onClick={() => history.push(RESULTS_ROUTE)}
                                    className={st.decline}>
                                <span className={st.declineInner}>
                                    Я сдаюсь
                                </span>
                                </button>
                            </div>
                        </div>
                        <div className={st.answers}>
                            {
                                isVisible ? (
                                    <>
                                        {
                                            invalidForm ? (
                                                <div>
                                                    <div className={st.error}>
                                                        {data.error}
                                                    </div>
                                                    {
                                                        data.sides ? (
                                                            <div className={st.values}>
                                                                A= {data.sides?.sideA};
                                                                B= {data.sides?.sideB};
                                                                C= {data.sides?.sideC};
                                                            </div>
                                                        ) : null
                                                    }
                                                    {
                                                        data.img ? (
                                                            <div className={st.triangleImg}>
                                                                <img src={data.img} alt="errorC"/>
                                                            </div>
                                                        ) : null
                                                    }
                                                </div>
                                            ) : (
                                                <div>
                                                    <div className={st.typo}>
                                                        <div className={st.triangleDecs}>
                                                            {data.header}
                                                        </div>
                                                        <div className={st.values}>
                                                            Вы ввели:
                                                            A= {data.sides.sideA};
                                                            B= {data.sides.sideB};
                                                            C= {data.sides.sideC};
                                                        </div>
                                                    </div>
                                                    <div className={st.triangleImg}>
                                                        <img src={data.img} alt={data.header}/>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </>
                                ) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

