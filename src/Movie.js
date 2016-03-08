import React from 'react';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import ReviewList from './ReviewList';

class Movie extends React.Component {
  constructor() {
  super();

  this.state = {
      movie: {},
      average_rating: "",
      reviews: []
    };
  }

  componentDidMount() {
    this.findMovie();
  }

  findMovie() {
    console.log("Searching your movie");

    let movieId = this.props.params.movieId;

    let component = this;

    jQuery.getJSON("http://damp-sands-25532.herokuapp.com/movies" + movieId + ".json", function(data) {
      console.log(data);

      component.setState({
        movie: data.movie,
        average_rating: data.average_rating
      });
    });
  }

  render() {
    return(
      <div>
        <h1>{this.state.movie.name}({this.state.average_rating})</h1>
        <hr />
        <h4>{this.state.movie.description}</h4>
        <p>Director: {this.state.movie.director}</p>
        <hr />
        <h4>Reviews</h4>
        <ReviewList movieId={this.props.params.movieId} />
      </div>
    );
  }
}

export default Movie;
