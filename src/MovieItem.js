import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';

class MovieItem extends React.Component {
    constructor(){
        super();
        this.state = {
          id: null,
          name: "",
          description: "",
          director: "",
          average_rating: 0
        };
    }

  componentDidMount() {
  this.setState({
    key: this.props.id,
    id: this.props.id,
    name: this.props.name,
    description: this.props.description,
    director: this.props.director,
    average_rating: this.props.average_rating
    })
  }

    render() {
        return (
              <tr>
                <td><Link to={`/movie/${this.state.id}`}>{this.state.name}</Link>({this.state.average_rating})</td>
              </tr>
        );
    }
}

export default MovieItem;
