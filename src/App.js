import logo from './logo.svg';
import './App.css';

var randomnum = getrandomnum();

function getrandomnum(){
  return Math.floor(Math.random() * 10) + 1;
}

var apar = <p>this is a paragraph</p>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>This is an h1</h1>
        <h2>This is an h2</h2>
        <h3>This is an h3</h3>
        <p>
          {randomnum}
        </p>
        {apar}
      </header>
    </div>
  );
}

export default App;
