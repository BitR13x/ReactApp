import NavbarComponent from './components/Navbar';
import logo from './logo.svg';
import './css/App.css';

function App() {
  return (
    <div>
      <NavbarComponent />
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


      </div>
    </div>
  );
}

export default App;
