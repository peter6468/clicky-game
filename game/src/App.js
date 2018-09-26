import React, { Component } from 'react';
import './App.css';
import FriendCard from './Components/FriendCard';
import Nav from './Components/Nav';
import Title from './Components/Title';
import Wrapper from './Components/Wrapper';
import Body from './Components/Body';
import friends from './friends.json';
import Container from './Container';
import Column from './Column';
import Row from './Row';







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
          title="Giphy Clicky Game"
         
          score = {this.state.currentScore}
          topScore= {this.state.topScore}
          //rightWrong= {this.state.rightWrong}
          />

          <Title>Click on an image to earn points, but do not click on any more than once!!!</Title>
         
          <Container>
            <Row>
              {this.state.friends.map(friend => (
              <Column size ="md-3 sm-6">
            {friends.map((e, i) => {
                return <FriendCard handleClick={this.testOnClick} id={e.id} image={e.image} name={e.name}/>
            })}
              </Column>
              ))}
           </Row>
          </Container>
      
      </Wrapper>
      
    );
  }
}

export default App;
