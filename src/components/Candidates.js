import React, { Component } from 'react';
//import firebase from './Firebase';
import { Redirect, Link } from 'react-router-dom';
import CandidatesCss from './Candidates.css';
import JuniorIcon from '../AstraLab/juniorIcon.png';
import ConsultorIcon from '../AstraLab/consultorIcon.png';
import SeniorIcon from '../AstraLab/seniorIcon.png';
import NoLevelIcon from '../AstraLab/noLevelIcon.png';
class Candidates extends Component {
    render() {
            return (
                <section className="Candidates">
                    <img className="companyLogo" src={require('../AstraLab/astraLogo.png')} alt="Company logo"></img>
                    <div className="filterContainer">
                        <div><Link to="/Junior"><img className="imgFilter" src={JuniorIcon}></img></Link></div>
                        <div><Link to="/Middle"><img className="imgFilter" src={ConsultorIcon}></img></Link></div>
                        <div><Link to="/Senior"><img className="imgFilter" src={SeniorIcon}></img></Link></div>
                        <div><Link to="/NoLevel"><img className="imgFilter" src={NoLevelIcon}></img></Link></div>
                    </div>
                    <div className="returnBtnContainer">
                    <Link to="./">
                        <button className="returnBtn">RETURN</button>
                    </Link>
                    </div>
                </section>
            )
        }
}
export default Candidates;