import React, { Component } from 'react';
import './App.css';
import FriendCard from './Components/FriendCard';
import Nav from './Components/Nav';
import Title from './Components/Title';
import Wrapper from './Components/Wrapper';
import friends from './friends.json';
import Container from './Container';
import Column from './Column';
import Row from './Row';


function shuffleFriends(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};


class App extends Component {
      state = {
        currentScore: 0,
        topScore: 0,
        rightWrong: "",
        clicked: [],
      };
  
  handleClick = id => {
    if (this.state.clicked.indexOf(id) ===-1) {
      this.handleIncrement();
      this.setState({ clikced: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore =this.state.currentScore +1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore === 12) {
      this.setState({ rightWrong: "You Rock!"})
    }
    this.handleShuffle;
  };

  handleShuffle = () => {
    let shuffledFriends =shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };
  
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
            {friends.map(friend => (
              <Column size ="md-3 sm-6">
                <FriendCard
                  key={friend.id}
                  id={friend.id}
                  image={friend.image}
                />
              </Column>
              ))}
           </Row>
          </Container>
      </Wrapper> 
    );
  }
}


export default App;
