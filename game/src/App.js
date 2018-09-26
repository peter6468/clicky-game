import React, { Component } from 'react';
import './App.css';
import FriendCard from './Components/FriendCard';
import Nav from './Components/Nav';
import Title from './Components/Title';
import Wrapper from './Components/Wrapper';





class App extends Component {

  render() {
    return (
      <Wrapper> 
        <Nav
          tile="Clicky Game"
          //score = {this.state.currentScore}
          //topScore= {this.state.topScore}
          //rightWrong= {this.state.rightWrong}
          />

          <Title>Click on an image to earn points, but do not click on any more than once!!!</Title>
      </Wrapper>
      
    );
  }
}

export default App;
