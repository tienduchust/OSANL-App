import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar/navbar'
import MainContent from './Components/maincontent/main_content'

class App extends Component {
  render() {
    return (
      <div>   
          <Navbar/> 
          <div class="clearfix"> </div>
          <MainContent/>          
      </div>
       
    );
  }
}

export default App;
