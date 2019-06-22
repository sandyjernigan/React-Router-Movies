import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'

export default class SavedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list
    };
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.state.list.map(movie => (
          <span className="saved-movie" key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} activeClassName="saved-active" key={movie.id}>
              {movie.title}
            </NavLink>
          </span>
        ))}
        <Link to="/">
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}