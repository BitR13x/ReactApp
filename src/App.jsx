import logo from './logo.svg';
import './css/App.css';
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/dashboard">dashboard</Link>
      </nav>
      <Outlet />
      <header className="App-header">
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


      </header>
    </div>
  );
}

export default App;