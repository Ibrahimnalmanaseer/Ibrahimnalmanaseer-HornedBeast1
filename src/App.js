import './App.css';
import Main from './main';
import React from 'react';
import jsonData from './data.json';
import SelectedBeast from './selectedbeast';
import Horned from './hornedbeast';



class App extends React.Component{


  constructor(props){

    super(props)
    this.state={

      display:<Main   myData={jsonData}   />  
    
  }};


  showModule=()=>{

    this.setState({
      display:<SelectedBeast/>
    })
  };

  render(){

    return(this.state.display)
  }
 

  }




export default App;
