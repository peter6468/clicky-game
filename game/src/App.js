import React, { Component } from 'react';
import './App.css';
import FriendCard from './Components/FriendCard';
import Nav from './Components/Nav';
import Title from './Components/Title';
import Wrapper from './Components/Wrapper';
import Body from './Components/Body';
import friends from './friends.json';






class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentScore: 1,
      topScore: 0
    }
  }
  testOnClick(id){
    alert('this works');
  }

  render() {
    return (
      <Wrapper> 
        <Nav
          title="Clicky Game"
         
          score = {this.state.currentScore}
          topScore= {this.state.topScore}
          //rightWrong= {this.state.rightWrong}
          />

          <Title>Click on an image to earn points, but do not click on any more than once!!!</Title>
         
          <Body>
            {friends.map((e, i) => {
                return <FriendCard handleClick={this.testOnClick} id={e.id} image={e.image} name={e.name}/>
            })}
          
           
          </Body>
      
      </Wrapper>
      
    );
  }
}

export default App;
