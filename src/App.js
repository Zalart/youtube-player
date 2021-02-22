import { Component } from 'react';
import './App.css';
import CardList from "./Components/CardList";
import data from "./Components/data";
import Player from "./Components/Player";


class App extends Component {
  constructor() {
    super();
    this.state = {
      pickedMovie: data[0],
      movieName: "",
    }
    this.handleSetMovie = this.handleSetMovie.bind(this);
    this.handleSortMovie = this.handleSortMovie.bind(this);
    this.newData = this.newData.bind(this);
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
      movieName: itemName
    })
  }

  newData(movieName) {
    return (
      data.filter((oneMovie) => oneMovie.itemName.includes(movieName)));

  }

  render() {
    const { pickedMovie, movieName } = this.state;
    const handleSetMovie = this.handleSetMovie;
    const filteredData = this.newData(movieName);
    return (
      <div className="App">
        <div>
          <div className="search">
            <input className="searchInput" onChange={(event) => (this.handleSortMovie(event.target.value))}></input>
            {this.newData(movieName).length !== data.length && <button onClick={() => { document.querySelector(".searchInput").value = ''; this.setState({ movieName: "" }) }}>Refresh</button>}
          </div>
          <Player movie={pickedMovie} />
        </div>
        <CardList handleSetMovie={handleSetMovie} data={filteredData} isEmpty={filteredData.length === 0} />

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