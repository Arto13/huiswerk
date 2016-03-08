import React from 'react';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import MovieItem from './MovieItem';

class MovieList extends React.Component {

    constructor(){
        super();

        this.state = {
            movies: []
        };
    }

  reloadMovies(event){
  let component = this;

    jQuery.getJSON("http://damp-sands-25532.herokuapp.com/movies", function(data){
      console.log(data);

        component.setState({
          movies: data.movies
        });
      });
    }

  componentDidMount() {
  this.reloadMovies();
 }

    render() {
        return (
            <div>
            <h1>Movies:</h1>
              <table>
                <tbody>
                  {this.state.movies.map(function(movie, i) {
                    return(
                    <MovieItem key={movie.id} id={movie.id} name={movie.name} average_rating={movie.average_rating} />
                    );
                  })}
                </tbody>
              </table>
              </div>
        );
    }
}

export default MovieList;
