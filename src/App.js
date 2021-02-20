import { Component } from 'react';
import './App.css';
import CardList from "./Components/CardList";
//import youtube from "./Components/youtube";
import data from "./Components/data";
import Player from "./Components/Player";


class App extends Component {
  constructor() {
    super();
    this.state = {
      pickedMovie: data[0],
      currentMovieName: ""
    }
    this.handleSetMovie = this.handleSetMovie.bind(this);
    this.handleSortMovie = this.handleSortMovie.bind(this);
    this.handleFilterMovie = this.handleFilterMovie.bind(this);
  }

  handleSetMovie(id) {
    const findMovieById = data.find((movie) => movie.id === id)
    this.setState({
      pickedMovie: findMovieById
    });
  }

  handleSortMovie(itemName) {
    this.setState({
      ...this.state,
      currentMovieName: itemName
    })
  }

  handleFilterMovie(movieName) {

    return (
      data.filter((movie) => movie.itemName.includes(movieName))
    );
  }

  render() {
    const { pickedMovie, currentMovieName } = this.state;
    const handleSetMovie = this.handleSetMovie;
    const filteredData = this.handleFilterMovie(currentMovieName);
    return (
      <div className="App">
        <input className="search" onChange={(event) => (this.handleSortMovie(event.target.value))}></input>
        {filteredData.length !== data.length && <button onClick={() => {
          document.querySelector('.search').value = '';
          this.handleSortMovie('');
        }
        }>Refresh</button>}
        <Player movie={pickedMovie} />
        <CardList handleSetMovie={handleSetMovie} data={filteredData} />
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