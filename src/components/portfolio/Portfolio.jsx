import { Typography } from '@material-ui/core'
import React from 'react'
import "./portfolio.scss"
import LocationOnIcon from '@material-ui/icons/LocationOnOutlined';

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h2>Resumo Profissional</h2>
            <ul>
                <li>
                    <Typography><LocationOnIcon className="icon"></LocationOnIcon> Smartex, Porto</Typography>
                    Julho 2021 - Setembro 2021
                    <br></br>
                    Março de 2021 - Junho 2021
                    <Typography>Estágio em Desenvolviment Web - Front-end</Typography>
                </li>
                <li>
                    <Typography><LocationOnIcon className="icon"></LocationOnIcon>MM Loja Online, Póvoa de Varzim</Typography>
                    Março 2020 - Fevereiro 2021
                    <br></br>
                    Assistente de vendas
                </li>
                <li> <Typography><LocationOnIcon className="icon"></LocationOnIcon>Allied Motion, Vila do Conde
                </Typography>
                    Julho 2019 - Setembro 2019
                    <br></br>
                    <Typography>Operadora de Produção </Typography>
                </li>
                <li> <Typography><LocationOnIcon className="icon"></LocationOnIcon>A Minha Prenda, Póvoa de Varzim
                </Typography>
                    Julho 2019 - Setembro 2019
                    <br></br>
                    Assistente de vendas

                </li>

            </ul>
            <div className="container">
                <div className="item">
                 
                </div>
            </div>
        </div>
    )
}
