import React, { Component } from 'react'
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
      currentMovieName: ""
    }
    this.handleSetMovie = this.handleSetMovie.bind(this);
    this.handleSetLikes = this.handleSetLikes.bind(this);
    this.handleSortMovie = this.handleSortMovie.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.handleFilterMovie = this.handleFilterMovie.bind(this);
  }

  componentDidMount() {
    fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBM5bUlUsH0XaTxxYq_CksFHWQltiumnAQ&maxResults=10&part=snippet&regionCode=RU&chart=mostPopular&type=video&q=FrontEnd`)
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
    const findMovieById = this.state.movies.find((movie) => movie.id === id)
    this.setState({
      pickedMovie: findMovieById
    });
  }

  handleSetLikes(id, isLike) {
    const findMovieIndexById = this.state.movies.findIndex((movie) => movie.id === id);
    this.setState(prev => {
      const { movies } = prev;
      const nextState = movies.map((ob, index) => {
        if (index !== findMovieIndexById)
          return ob;
        return {
          ...ob,
          [isLike]: movies[findMovieIndexById][isLike] + 1,
        }
      });
      return {
        movies: nextState,
        pickedMovie: nextState[findMovieIndexById]
      }
    })
  }

  handleCommentSubmit(id, author, comment) {
    const findMovieIndexById = this.state.movies.findIndex((movie) => movie.id === id);
    this.setState(prev => {
      const { movies } = prev;
      const nextState = movies.map((ob, index) => {
        if (index !== findMovieIndexById)
          return ob;
        return {
          ...ob,
          comments: this.state.comments.push([[author, comment]])
        }
      });
      return {
        movies: nextState,
        pickedMovie: nextState[findMovieIndexById]
      }
    })
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
    const filteredData = this.handleFilterMovie(currentMovieName);
    return (

      <div className="App">

        <input className="search" onChange={(event) => (this.handleSortMovie(event.target.value))}></input>
        {filteredData.length !== this.state.movies.length && <button onClick={() => {
          document.querySelector('.search').value = '';
          this.handleSortMovie('');
        }
        }>Refresh</button>}
        <Player handleSetLikes={handleSetLikes} {...pickedMovie} handleCommentSubmit={handleCommentSubmit} />

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