import React from 'react'
import "./menu.scss"

export default function Menu(props) {
    return (
        <div className={"menu " + (props.menuOn && "active")}>
            <ul>
                <li onClick={() => props.setMenuOn(false)}>
                    <a href="#intro">HOME</a>
                </li>
                <li onClick={() => props.setMenuOn(false)}>
                    <a href="#intro">Perfil  </a>
                </li>
                <li onClick={() => props.setMenuOn(false)}>
                    <a href="#portfolio">Resumo Profissional</a>
                </li>
                <li onClick={() => props.setMenuOn(false)}>
                    <a href="#testimonials">Académico</a>
                </li>
            </ul>
        </div>
    )
}
