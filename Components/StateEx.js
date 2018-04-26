import React, {Component} from 'react';
import {render} from 'react-dom';
class A extends  React.Component{
    render(){
        return <B quality="eye balls" />;
    }
}
class B extends React.Component{
   render(){
    return <p> I am a true son. I have my father's "{ this.props.quality }" . </p>;
   }
}

export default A;