import React from 'react'
import "./intro.scss"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {init} from 'ityped';
import {useRef, useEffect} from 'react'

export default function Intro() {

    const text= useRef();

    useEffect(() => {
        init(text.current, {
            showCursor: true,
            backDelay: 2000,
            backSpeed: 80,
            strings: ["Engenharia de Informática"],
        })
    }, [])


    return (
        <div className="intro" id="intro">

            <div className="left">
                <div className="img">
                    <img src="assets/woman.png"></img>
                </div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h1>Thaís Menezes</h1>
                    <h2>Finalista em <span ref={text}></span></h2>
                    <h3>Estágio curricular em desenvolvimento Web.</h3>
                </div>
                <a href="#portfolio">
                    <ArrowDownwardIcon className="down"></ArrowDownwardIcon>
                </a>
            </div>
        </div>
    )
}
