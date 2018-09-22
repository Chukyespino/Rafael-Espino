import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Review from './components/review/Review';
import { data } from './data';

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      reviews: data.filter(review => review.product === 'Atom')
    };

    this.addLike = this.addLike.bind(this);
  }

  addLike(id, likes) {

    let newState = {...this.state};
    let review = newState.reviews.find(review => review.id === id);
    review.likes = likes;
    this.setState(newState);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Atom Reviews</h1>
        </header>
        <p className="App-intro">
          here are the latest reviews of the Atom editor. 
        </p>
        <main>
          {
            this.state.reviews.map(review =>
            <Review review={review} key={review.id} addLike={this.addLike}/>)
          }
        </main>
      </div>
    );
  }
}

export default App;
