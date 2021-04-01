import './App.css';
import Geolocation from './containers/Geolocation';
import Weather from './containers/Weather';

function App() {
  return (
    <div className="App">
      <Geolocation>
        <Weather />
      </Geolocation>
    </div>
  );
}

export default App;
