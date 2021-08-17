import logo from './logo.svg';
import './App.css';

function Umur(props) {
  return (
    <span>saya berumur {props.age} tahun.</span>
  )
}

function PanggilNama(props) {
  return (
    <p>Hallo, <Ucapan/> perkenalkan nama saya {props.nama} dan <Umur age={props.umur}/></p>
  )
}

function Ucapan() {
  return (
    <span>Selamat Datang!</span>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PanggilNama nama="Riki Widiantoro" umur="22"/>
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
