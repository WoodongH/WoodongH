import './styles/_font.scss';
import Headers from './components/Headers';
import MapBox from './components/Map/MapBox';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div className="App">
      <Headers />
      <SearchBox />
      <MapBox />
    </div>
  );
}

export default App;
