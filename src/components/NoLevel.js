import React, { Component } from 'react';
import "firebase/database";
import fireConfig from './Firebase';
import { Redirect, Link } from 'react-router-dom';



class NoLevel extends Component{


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
          test: snap.val().testlevel
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
            
          <div className="titlejunior" ><h1>Awareness</h1></div>
          

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

                  if(can.test == "no level")

                  return(
                      <tr>
                          <th>{can.name}</th>
                          <th>{can.levelenglish}</th>
                          <th>{can.email}</th>
                          <th>{can.test}</th>
                      </tr>



                  )
              })

              }
              </table>

      
          </div>

          <div><Link to="./Candidates">
              
              <button className = "btnRtnDataFilter">Return</button>
              </Link></div>

          </div>
        )

    }

}

export default NoLevel