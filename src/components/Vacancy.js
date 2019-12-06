import React, { Component } from 'react';
//import firebase from './Firebase';
import { Redirect, Link } from 'react-router-dom';
import VacancyCss from './Vacancy.css'
import fbIcon from '../AstraLab/facebookIcon.png'
import indeedIcon from '../AstraLab/indeedIcon.png'
import linkedinIcon from '../AstraLab/linkedinIcon.png'
import logoAstra from '../AstraLab/astraLogo.png'

class Vacancy extends Component {
   
    render() {
       
            return (
                <section className="Vacancy">
                  <img className="astra" src={logoAstra}></img>   
                  <p>Job Title:</p>
                  <input></input>
                  <p>Job description and requirements:</p><textarea rows="12" cols="80"></textarea>
                  <div>
                    <input className="checkBtn" type="checkbox"></input>
                    <img src={fbIcon}></img>
                    <input className="checkBtn" type="checkbox"></input>
                    <img src={indeedIcon}></img>
                    <input className="checkBtn" type="checkbox"></input>
                    <img src={linkedinIcon}></img>
                  </div>
                  <div className="vacancyDiv">
                    <Link to="./"><button  className="vacancyBtn">CANCEL</button></Link>
                    <Link to="./"><button  className="vacancyBtn">POST</button></Link>
                  </div>
                  
                </section>
            )
        }       
    
}
export default Vacancy;