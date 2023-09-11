import { useState } from "react";

function App() {
  const [fact, setFact] = useState({});
  async function jokeHandler() {
    const response = await fetch(`https://api.chucknorris.io/jokes/random`);
    const data = await response.json();
    setFact(data);
  }

  return (
    <div className="container">
      <h1 className="heading">Chuck Norris Random Jokes</h1>

      <div className="fact-style">
        {fact.value ? fact.value : <p className="fact-style-click">CLICK ON BUTTON ...</p>}
      </div>

      <button className="btn-style" onClick={jokeHandler}>
        CLICK TO GENERATE
      </button>
    </div>
  );
}

export default App;
