import React, { Component } from 'react'
import "./academic.scss"

export class Academic extends Component {
    render() {
        return (
            <div className="academic" id="testimonials">
                <h2>Académico</h2>
                <h3>Cursando o último semestre de Engenharia de Informática no Instituto Superior de Engenheria do Porto.</h3>
                <h2>Tecnologias de Desenvolvimento</h2>

                <li>
                    React
                </li>
                <li>
                    TypeScript
                </li>
                <li>
                    CSS
                </li>
                <li>
                    Base de Dados Relacionais e não relacionais
                </li>
                <li>
                    Java
                </li>
                <li>
                    Material-UI
                </li>
                <li>
                    JavaScript
                </li>

                <h2>Tecnologias de Equipa</h2>
                <li>
                    Jira
                </li>
                <li>
                    Notion
                </li>
                <li>Slack</li>
                <li>GitLab</li>
                <li>GitHub</li>
            </div>
        )
    }
}

export default Academic
