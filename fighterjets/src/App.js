import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetNewData from './GetNewData.js';
import Card from './Card.js';
import CardGenerator from './Card.js';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    data:[
      {
      name: "F84 Thunderjet",
      make: "Republic  Aviation",
      topSpeed: "622 MPH",
      weapons:  "6 x .50 in M3 Browning machine guns",
                  
                },
      {
      name: "F86 Sabre",
      make: "North American Aviation",
      topSpeed: "685 MPH",
      weapons:  " 6 X 0.50 in (12.7 mm) M3 Browning machine guns (1,800 rounds in total)",
                  
      },
      {
      name: "F100 Super Sabre",
      make: "North American Aviation",
      topSpeed: "864 MPH",
      weapons:  "4× 20 mm (0.787 in) Pontiac M39A1 revolver cannon w/ 200 rpg",
                  
              
      },
      {
      name: "F4 Phantom 2",
      make: "McDonald Douglas",
      topSpeed: "1,473 MPH",
      weapons:  "E-model has a 20 mm (0.787 in) M61A1 Vulcan cannon mounted internally under the nose, 640 Rounds",
                  
              
      }
  ]
  }
  this.create = this.create.bind(this);
  this.delete = this.delete.bind(this)
  }
  create(obj){
    console.log(obj);
    this.setState({
      data: this.state.data.concat([obj])
    })
  }
  delete(fighterJetName){
      this.setState({data: this.state.data.filter((fighterJet)=> {
          if(fighterJetName === fighterJet.name){
            return false
          }else {
            return true;
          }
      })});
  }


  update(obj){
    console.log(obj)
    this.setState({
      data: this.state.data
    })
    
  }
  
  render() {
    return (
      <div className="App">
        <CardGenerator update={this.update} delete={this.delete} fighterData={this.state.data}/>
        <GetNewData create={this.create}/>
      </div>
    );
  }
}


export default App;