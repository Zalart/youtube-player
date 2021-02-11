import './App.css';
import ReactPlayer from 'react-player';
import CardList from "./Components/CardList";
import data from "./Components/data";


function App() {
  return (
    <div className="App">

      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      <CardList {...data} />
    </div>
  );
}

export default App;