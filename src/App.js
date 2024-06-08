import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Apa Itu Node Js ?</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo1" alt="logo" />
        <img src={logo} className="App-logo2" alt="logo" />
      </header>
      <section className="App-content">
        <p>
          Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine
          that allows developers to run JavaScript on the server-side.
        </p>
        <p>
          It provides an event-driven, non-blocking I/O model, which makes it
          lightweight and efficient for building scalable server-side
          applications.
        </p>
      </section>
      <footer className="App-footer">
        <p>
          Punya <code>Muhammad Adifa Firmansyah</code>.
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/adifafirmansyah/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow me on Instagram!
        </a>
      </footer>
    </div>
  );
}

export default App;
