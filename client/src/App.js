import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { SavedList, MovieList, Movie } from './Movies';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <div><Route exact path="/" component={MovieList} /></div>
        <div><Route path="/movies/:id" 
          render={(props) => <Movie {...props} addToSavedList={this.addToSavedList} />}
          /></div>
      </div>
    );
  }
}
