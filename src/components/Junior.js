import React, { Component } from 'react';
import "firebase/database";
import fireConfig from './Firebase';
import { Redirect, Link } from 'react-router-dom';
import JuniorCss from './Junior.css'


class Junior extends Component{


constructor(){
    super();

    this.db = fireConfig.database().ref().child("Candidates"); 

    this.state = {
        candidates:[]
    };

}



componentWillMount(){

    const prevNotes = this.state.candidates;



    this.db.on("child_added", snap => {
        prevNotes.push({
          id: snap.key,
          email: snap.val().email,
          levelenglish: snap.val().levelenglish,
          name: snap.val().name,
          test: snap.val().testlevel,
          logicQuestion: snap.val().LogicQuestion,
        });
  
        this.setState({
          candidates: prevNotes
        });
      });
  
      this.db.on("child_removed", snap => {
        for (var i = 0; i < prevNotes.length; i++) {
          if (prevNotes[i].noteId === snap.key) {
            prevNotes.splice(i, 1);
          }
        }
  
        this.setState({
          candidates: prevNotes
        });
      });
  
      this.db.on("child_changed", snap => {
        for (var i = 0; i < prevNotes.length; i++) {
          if (prevNotes[i].noteId === snap.key) {
            prevNotes[i] = snap.val();
          }
        }
  
        this.setState({
          candidates: prevNotes
        });
      });
}


    render(){
        return(

          <div>
             <img className="companyLogo" src={require('../AstraLab/astraLogo.png')} alt="Company logo"></img>
            
            <div className="titlejunior" ><h1>Junior</h1></div>
            

            <div className="juniorDiv" >

              
            
              <table class="flat-table">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>English Level</th>
                    <th>Email</th>
                    <th>Test Level</th>
                  </tr>
                  </tbody>
              
            

                {this.state.candidates.map(can =>{

                    if(can.test == "junior")

                    return(
                        <tr>
                            <th>{can.name}</th>
                            <th>{can.levelenglish}</th>
                            <th>{can.email}</th>
                            <th>{can.test}</th> 
                            <th><button className="btnShowData" onClick={()=>{}}>Show Results</button></th>                           
                        </tr>

                    )
                })

                }
                </table>

              

        
            </div>

            <div className="btnRtnDiv" ><Link to="./Candidates">
              
            <button className = "btnRtnDataFilter">Return</button>
              </Link></div>

            </div>
        )

    }

}

export default Junior
