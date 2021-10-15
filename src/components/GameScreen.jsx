import * as React from 'react';
import st from '../assets/styles/gameScreen.module.css'
import GameInput from './GameInput'
import BugsRow from './BugsRow'
import CasesRow from './CasesRow'
import {useHistory} from "react-router-dom";
import {RESULTS_ROUTE} from "../utils/paths";
import equilateralTr from '../assets/img/Triangles/equilateralTr.png'
import isoscelesTr from '../assets/img/Triangles/isoscelesTr.png'
import rightTr from '../assets/img/Triangles/rightTr.png'
import angledTr from '../assets/img/Triangles/angledTr.png'
import errorC from '../assets/img/Triangles/errorC.png'

const GameScreen = () => {
    const history = useHistory();
    const [sideA, setSideA] = React.useState('');
    const [sideB, setSideB] = React.useState('');
    const [sideC, setSideC] = React.useState('');

    const [isVisible, setVisible] = React.useState(false);
    const [invalidForm, setInvalidForm] = React.useState(false);

    const [data, setData] = React.useState({});

    function getTriangle() {
        const sides = [
            sideA,
            sideB,
            sideC,
        ]
        const tr = sides.sort((a, b) => a - b)
        const a = parseInt(tr[0])
        const b = parseInt(tr[1])
        const c = parseInt(tr[2])

        switch (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {

            case true: {
                console.log(Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c))

                const sum = (Math.pow(a, 2) + Math.pow(b, 2)).toFixed(2)
                const side = Math.pow(c, 2).toFixed(2)
                if (a + b < c) {
                    const newData = {
                        error: 'Не выполнились условия треугольника',
                    }
                    setData(newData)
                    setVisible(true)
                    setInvalidForm(true)
                    break
                }
                if (a.toString.length > 10 || b.toString.length > 10 || c.toString.length > 10) {
                    console.log('Big numbers')
                }
                if ((a % 1 !== 0) || (b % 1 !== 0) || (c % 1 !== 0)) {
                    console.log('BUG side lines height is float')
                }
                if (a === b && a === c) {
                    if (a === 0 && b === 0 && c === 0) {
                        return console.log('BUG side lines height is 0')
                    }
                    console.log('Равносторонний')
                    const newTriangle = {
                        header: 'Это равносторонний треугольник',
                        sides: {sideA, sideB, sideC},
                        img: equilateralTr,
                    }
                    setData(newTriangle)
                    setVisible(true)
                    break
                }
                if (a === b || a === c || b === c) {
                    const newTriangle = {
                        header: 'Это равнобедренный треугольник',
                        sides: {sideA, sideB, sideC},
                        img: isoscelesTr,
                    }
                    setData(newTriangle)
                    setVisible(true)
                    break
                }
                if (sum === side) {
                    const newTriangle = {
                        header: 'Это прямоугольный треугольник',
                        sides: {sideA, sideB, sideC},
                        img: rightTr,
                    }
                    setData(newTriangle)
                    setVisible(true)
                    break
                }
                if (sum < side) {
                    const newTriangle = {
                        header: 'Это тупоугольный треугольник',
                        sides: {sideA, sideB, sideC},
                    }
                    setData(newTriangle)
                    setVisible(true)
                    break
                }
                if (sum > side) {
                    const newTriangle = {
                        header: 'Это остроугольный треугольник',
                        sides: {sideA, sideB, sideC},
                        img: angledTr,
                    }
                    setData(newTriangle)
                    setVisible(true)
                    break
                }
                break
            }
            case false: {
                if (sideA.length === 0 && sideB.length === 0 && sideC.length === 0) {
                    const newData = {
                        error: 'Заполните все поля',
                    }
                    setData(newData)
                    setVisible(true)
                    setInvalidForm(true)
                    break
                }
                if ((sideA.length === 0 || sideB.length === 0) && sideC.length !== 0) {
                    const newData = {
                        error: 'Задайте все стороны',
                    }
                    setData(newData)
                    setVisible(true)
                    setInvalidForm(true)
                    break
                }
                if (sideA.length > 0 && sideB.length > 0 && sideC.length > 0) {
                    return console.log('Invalid format (strings)')
                }
                if (sideA.length > 0 && sideB.length > 0 && sideC.length === 0) {
                    const newData = {
                        header: 'C field is empty',
                        img: errorC,
                        sides: {sideA, sideB, sideC},
                    }
                    setData(newData)
                    setVisible(true)
                    break
                }
                break
            }
            default:
                break
        }
    }

    return (
        <div className={st.wrapper}>
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
                                <BugsRow/>
                            </div>
                            <div className={st.cases}>
                                <CasesRow/>
                            </div>
                        </div>
                        <div className={st.counters}>
                            <div className={st.bugsFinded}>
                                Вы нашли ошибок
                                <span className={st.bugsCounterMore}>0</span>
                            </div>
                            <div className={st.casesFinded}>
                                Попробовали кейсов
                                <span className={st.casesCounterMore}>0</span>
                            </div>
                        </div>
                    </div>
                    <div className={st.form_wrapper}>
                        <div className={st.form}>
                            <div className={st.inputs}>
                                <GameInput side={'A'} sideValue={sideA} setSide={setSideA}/>
                                <GameInput side={'B'} sideValue={sideB} setSide={setSideB}/>
                                <GameInput side={'C'} sideValue={sideC} setSide={setSideC}/>
                            </div>
                            <div className={st.btns}>
                                <button
                                    onClick={getTriangle}
                                    className={st.approve}>
                                <span className={st.approveInner}>
                                    Проверить
                                </span>
                                </button>
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
                                                <div className={st.error}>
                                                    {data.error}
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

export default GameScreen;