import Horned from "./hornedbeast";
import React from "react";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";




class Main extends React.Component{

    constructor (props){
     super(props)

    }

    

       
    render(){
               
      let myJson = this.props.myData; //import json from App

      return ( <div id='hornesCard'>  {myJson.map((value, i) => 
      <Horned     name={myJson[i]['title']} myJson={myJson[i]['description']} imgUrl={myJson[i]['image_url']} />)}
      </div>)

}
}

export default Main;

