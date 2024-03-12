
import './App.css';  

function App() {
  return (
    <>
      {/* <header className="App-header">
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
      </header> */}

      <h1>Greetings Universe!</h1>
      <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt quo ullam laboriosam nihil, cumque dolores dolorum, nam necessitatibus tempora eveniet tempore commodi eaque est. Dolorum ea aliquam, error quas laboriosam amet accusantium assumenda fugit minima suscipit! Quos obcaecati sapiente odio eos quam earum debitis! Vel temporibus voluptatum quae nostrum odio.</p>
      <hr/>
      <select>
        <option value='green'>green</option>
        <option value='red'>red</option>
        <option value='cadetblue'>cadetblue</option>
        <option value='purple'>purple</option>
      </select>
      <hr/>
      <img src='/img/side_eye_cat.jpg' height='200px' alt='side eye cat' title='side eye cat'/>
    </>
  );
}

export default App;
