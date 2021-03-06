import React from 'react';
import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

import {GameInput} from '../GameInput'
import {BugsRow} from '../BugsRow'
import {CasesRow} from '../CasesRow'

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
        const numberExp = new RegExp('^[0-9]+$')

        if (tr[0].length === 0 && tr[1].length === 0 && tr[2].length === 0) {
            setData({
                error: '?????????????? ?????? ??????????????'
            })
            setInvalidForm(true)
            setVisible(true)
            return filteredCases('?????? ???????? ????????????')
        }
        if ((sideA.length === 0 || sideB.length === 0) && sideC.length !== 0) {
            setData({
                error: '?????????????? ?????? ??????????????'
            })
            setInvalidForm(true)
            setVisible(true)
            return filteredCases('???? ?????? ???????? ????????????')
        }

        if (numberExp.test(sideA) && numberExp.test(sideB) && numberExp.test(sideC)) {
            if (sideA.length >= 10 || sideB.length >= 10 || sideC.length >= 10) {
                filteredCases('?????????????? ??????????')
            }

            if (a === 0 || b === 0 || c === 0) {
                setData({
                    header: '???????????????????????????? ??????????????????????',
                    sides: {sideA, sideB, sideC},
                    img: equilateralTr
                })
                return filteredBugs('?????????????????????? ???? ?????????????????? 0')
            }
            if (a + b < c) {
                setInvalidForm(false)
                setVisible(false)
                return filteredCases('???? ?????????????????????? ?????????????? ????????????????????????')
            }
            if (a === b && a === c) {
                setData({
                    header: '???????????????????????????? ??????????????????????',
                    sides: {sideA, sideB, sideC},
                    img: equilateralTr
                })
                setVisible(true)
                return filteredCases('???????????????????????????? ??????????????????????')
            }
            if (a === b || a === c || b === c) {
                setData({
                    header: '???????????????????????????? ??????????????????????',
                    sides: {sideA, sideB, sideC},
                    img: isoscelesTr
                })
                setVisible(true)
                return filteredCases('???????????????????????????? ??????????????????????')
            }
            if (sum === side) {
                setData({
                    header: '?????????????????????????? ??????????????????????',
                    sides: {sideA, sideB, sideC},
                    img: rightTr
                })
                setVisible(true)
                setInvalidForm(false)
                return filteredCases('?????????????????????????? ??????????????????????')
            }
            if (sum < side) {
                setData({
                    header: '???????????????????????? ??????????????????????',
                    sides: {sideA, sideB, sideC},
                    img: tupougolniy
                })
                setVisible(true)
                setInvalidForm(false)
                return filteredCases('???????????????????????? ??????????????????????')
            }
            if (sum > side) {
                setData({
                    header: '?????????????????????????? ??????????????????????',
                    sides: {sideA, sideB, sideC},
                    img: angledTr
                })
                setVisible(true)
                setInvalidForm(false)
                return filteredCases('?????????????????????????? ??????????????????????')
            }
        }
        if ((sideA.length !== 0 || sideB.length !== 0) && sideC.length === 0) {
            setData({
                error: '?????? ???? ??????????????????????',
                sides: {sideA, sideB, sideC},
                img: errorC
            })
            setInvalidForm(true)
            setVisible(true)
            return filteredBugs('?????????? ???? ???????????????????? ???????? ??')
        }

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            let result
            const regScript = new RegExp('<[sS][cC][rR][iI][pP][tT]>')
            const selectReg = /select/i
            const whereReg = /where/i
            const orReg = /or/i
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
                    return filteredCases('XSS - ????????????????????')
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
                return filteredBugs('XSS - ???????????????????? (??????????????)')
            }
            if (
                selectReg.test(sideA) || orReg.test(sideA) || whereReg.test(sideA) ||
                selectReg.test(sideB) || orReg.test(sideB) || whereReg.test(sideB) ||
                selectReg.test(sideC) || orReg.test(sideC) || whereReg.test(sideC)) {
                return filteredCases('SQL-????????????????')
            }
        }
        if (a.toString.length !== 0 || b.toString.length !== 0 || c.toString.length !== 0) {
            setVisible(false)
            if (sideA.includes('.')) {
                return filteredBugs('?????????????? ??????????')
            }
            return filteredCases('???????????? ?? ??????????')
        }
    }

    return (
        <div className={st.wrapper}>
            {
                isOpen ? (
                    <div className={st.xssAttack}>
                        <div className={st.header}>
                            XXS-??????????
                        </div>
                        <div className={st.resultOfAttack}>
                            {xxsAttack}
                        </div>
                        <div className={st.attackActions}>
                            <button className={st.btnAttack} onClick={() => setOpen(false)}>
                                <span className={st.declineInner}>??????????????</span>
                            </button>
                        </div>
                    </div>
                ) : null
            }
            <div className={st.container}>
                <div className={st.description}>
                    <div className={st.header}>
                        ????????????????????????
                    </div>
                    <div className={st.body}>
                        <p>???? ???????????????????????????? ???????????????????? ?????????????????????????? ?????????? ???????? ?????????????? ???? ???????????????? ???????????? ??????????.
                            ????????
                            ???? ???????????????? ???????????????????? ??? ???????????????????????? ??????????????????, ?????????????? ????????????????????
                            ?????? ???????????????????????? ???? ???????? ?????? ????????????????. ???????????? ???? ???????????? ???????????????? ?? ?????????????????? ??????????????????
                            ????????.</p>
                        <p>?????? ????????, ?????????? ???? ?????????? ??????????????????????????????, ???? ?????????????? ?????????????? ???????????????? ?? ???????????????? ?? ??????
                            ?????????????????? ??????????. ?????????? ???? ???????????????????????? ???????????? ???????????????? ????????????, ?????????????? ????
                            ???????????? ???????????????????????? ?????? ????????????????????????. ??????????????????????, ?????????????????????? ???????????? ?????????? ????????????????????
                            ??????????
                            ??? ???? ???? ???????????? ?????????????? ?????????? ????????????.</p>
                        <p>?????????????????????? ???????????? ??? ???????? ?????????????????? ?????????? ?? ???????????? ?????????????? ???? ?????????????? ??????????????. ??????????????
                            ?????????????????? ???? ?????????????????????? ???? ?? cookie, ???? ?? storage.
                            ?????? ?????? ?????? ???????????????????????? ???????????????? ???????????????? ????????????????????.</p>
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
                                ???? ?????????? ????????????
                                <span className={st.bugsCounterMore}>{bugs.length}</span>
                            </div>
                            <div className={st.casesFinded}>
                                ?????????????????????? ????????????
                                <span className={st.casesCounterMore}>{cases.length}</span>
                            </div>
                        </div>
                    </div>
                    <div className={st.form_wrapper}>
                        <div className={st.form}>
                            <div className={st.inputs}>
                                <GameInput
                                    side={'?????????????? A'}
                                    sideValue={sideA}
                                    setSide={setSideA}
                                    placeholder={'?????????????? ????????????????'}
                                />
                                <GameInput
                                    side={'?????????????? B'}
                                    sideValue={sideB}
                                    setSide={setSideB}
                                    placeholder={'?????????????? ????????????????'}
                                />
                                <GameInput
                                    side={'?????????????? C'}
                                    sideValue={sideC}
                                    setSide={setSideC}
                                    placeholder={'?????????????? ????????????????'}
                                />
                            </div>
                            <div className={st.btns}>
                                {
                                    bugs.length === 4 && cases.length === 12 ? (
                                        <button
                                            onClick={() => history.push(FORM_ROUTE)}
                                            className={st.push}>
                                            <span className={st.approveInner}>
                                            ????????????
                                            </span>
                                        </button>
                                    ) : (
                                        <button
                                            onClick={getTriangle}
                                            className={st.approve}>
                                            <span className={st.approveInner}>
                                                ??????????????????
                                            </span>
                                        </button>
                                    )
                                }

                                <button
                                    onClick={() => history.push(RESULTS_ROUTE)}
                                    className={st.decline}>
                                <span className={st.declineInner}>
                                    ?? ????????????
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
                                                            ???? ??????????:
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