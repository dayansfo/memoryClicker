import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
    state = {
      friends:friends,
      currentScore:0,
      highScore:0,
      gameMessage:'Click an image to begin!',
      status:0
    };
  
    shuffle = (a) => {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
  
    handleTouchFriend = (id) => {
      let newFriends = this.state.friends;
      const checkFriend = newFriends.indexOf(newFriends.find(friend => friend.id === id));
      console.log(this.state);
      if((newFriends[checkFriend].touched === 0) && (this.state.status === 0))
      {
        newFriends[checkFriend].goodBad = "cardGood";
        newFriends[checkFriend].touched = 1;
        newFriends[checkFriend].goodBad = "";
        this.shuffle(newFriends);
        this.setState({friends:newFriends});
        this.handleCurrentScore();
      }
      else if (this.state.status === 0)
      {
        newFriends[checkFriend].goodBad = "cardBad";
        this.setState({status:1});
        this.youLose();
      }
      
    }
  
    handleHighScore = (score) => {
      const newHighScore = score;
      if(score > this.state.highScore)
      this.setState({highScore:newHighScore});
      if(score === 12){
        this.setState({status:1});
        this.youWin()
      }
    }
  
    handleCurrentScore = () => {
      const newScore = this.state.currentScore + 1;
      this.setState({currentScore:newScore});
      this.handleHighScore(newScore);
    }
  
  resetFriends = () => {
    let newFriends = this.state.friends;
    newFriends.forEach(function(item,index){
      item.touched = 0;
      item.goodBad = "";
    });
    this.setState({friends:newFriends});
  }
  
    resetGame = () => {
      this.setState({currentScore:0});
      this.setState({status:0})
      this.setState({gameMessage:"Click an image to begin!"})
      this.resetFriends();
    }
  
    youLose = () => {
      this.setState({gameMessage:"You Lose! (click me to reset)"});
    }
  
    youWin = () => {
      this.setState({gameMessage:"You Win! (click me to reset)"});
    }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            handleTouchFriend = {this.handleTouchFriend}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
