import React from 'react'
import "./topbar.scss";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Identity from '@material-ui/icons/PermIdentity';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
export default function Topbar(props) {

    return (
        <div className={"topbar " + (props.menuOn && "active" )}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">MyProfessionalCV.</a>

                    <div className="itemContainer">
                        <MailOutlineIcon className="icon"></MailOutlineIcon>
                        <span className="span">thaismenezes.f@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <Identity className="icon"></Identity>
                        <span className="span">+911 906 020</span>
                    </div>
                    <div className="itemContainer">
                        <LinkedInIcon className="icon"></LinkedInIcon>
                       <a href="https://www.linkedin.com/in/thaismenezesf/" className="linkedin"> 
                        <span className="span">thaismenezesf</span>
                           
                           </a> 
                    </div>
                </div>
                <div className="right">
                    <div className="menuOn" onClick={()=>props.setMenuOn(!props.menuOn)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
