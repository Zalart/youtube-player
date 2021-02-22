import React, { Component } from 'react';
import key from "./key.js";
import './App.css';
import CardList from "./Components/CardList";
import Player from "./Components/Player";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      movies: [],
      pickedMovie: {},
      currentMovieName: "",
      commentValue: ""
    }
    this.handleSetMovie = this.handleSetMovie.bind(this);
    this.handleSetLikes = this.handleSetLikes.bind(this);
    this.handleSortMovie = this.handleSortMovie.bind(this);
    this.handleCommentsChange = this.handleCommentsChange.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.handleFilterMovie = this.handleFilterMovie.bind(this);
  }

  componentDidMount() {
    alert('New Fetch!');
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${key}&maxResults=10&part=snippet&regionCode=RU&chart=mostPopular&type=video&q=FrontEnd`)
      .then(res => res.json())
      .then(
        (result) => {

          const moviesSet = result.items.reduce((movies, item) => {
            const movie = {};
            movie.title = item.snippet.title;
            movie.description = item.snippet.description;
            movie.id = item.id.videoId;
            movie.thumbnail = item.snippet.thumbnails.medium.url;
            movie.channel = item.snippet.channelTitle;
            movie.like = 0;
            movie.dislike = 0;
            movie.comments = [];
            movies.push(movie);
            return movies;
          }, []);
          this.setState({
            isLoaded: true,
            movies: moviesSet,
            pickedMovie: moviesSet[0],

          });

        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: true
          });
        }
      )
  }

  handleSetMovie(id) {

    this.setState(prev => {
      const { movies, pickedMovie } = prev;
      const findMovieById = movies.find((movie) => movie.id === id)
      const findPickedMovieIndexById = movies.findIndex((movie) => movie.id === pickedMovie.id);
      const nextState = movies.map((ob, index) => {
        if (index === findPickedMovieIndexById)
          return pickedMovie;
        return ob;

      });

      return {
        pickedMovie: findMovieById,
        movies: nextState

      }
    })
  }

  handleSetLikes(isLike) {
    this.setState(prev => ({
      ...prev,
      pickedMovie: {
        ...prev.pickedMovie,
        [isLike]: this.state.pickedMovie[isLike] + 1,
      }
    })
    )
  }
  handleCommentsChange(event) {
    this.setState({ commentValue: event.target.value });
  }

  handleCommentSubmit(event) {
    event.preventDefault();
    console.log(this.state.commentValue)
    this.setState(prev => ({
      ...prev,
      pickedMovie: {
        ...prev.pickedMovie,
        comments: [...this.state.pickedMovie.comments, this.state.commentValue],
      }

    })
    )

  }

  handleSortMovie(itemName) {
    this.setState({
      ...this.state,
      currentMovieName: itemName
    })
  }

  handleFilterMovie(movieName) {
    return (
      this.state.movies.filter((movie) => movie.title.includes(movieName))
    );
  }

  render() {

    const { pickedMovie, currentMovieName } = this.state;
    const handleSetMovie = this.handleSetMovie;
    const handleSetLikes = this.handleSetLikes;
    const handleCommentSubmit = this.handleCommentSubmit;
    const handleCommentsChange = this.handleCommentsChange;
    const filteredData = this.handleFilterMovie(currentMovieName);
    return (

      <div className="App">

        <input className="search" onChange={(event) => (this.handleSortMovie(event.target.value))}></input>
        {filteredData.length !== this.state.movies.length && <button onClick={() => {
          document.querySelector('.search').value = '';
          this.handleSortMovie('');
        }
        }>Refresh</button>}
        <Player handleSetLikes={handleSetLikes} {...pickedMovie} handleCommentSubmit={handleCommentSubmit} handleCommentsChange={handleCommentsChange} />

        <CardList handleSetMovie={handleSetMovie} data={filteredData} pickedMovieId={pickedMovie.id} />
      </div>
    );
  }
}

export default App;

/* Aleksandr Gribko21:34
- Как юзер я хочу видеть кнопку "показать все", когда результат был отфильтрован
- как юзер, я хочу видеть надпись "нет фильмов по запросу", когда по фильтру не выдает списка фильмов
- как юзер, я хочу оставлять комментарии под видео плеером
* - использовать material ui кнопку
и input */