import MondatokModel from './model/MondatokModel';
import Kiegeszit from './view/Kiegeszit';
import './App.css';

function App () {
  const MODEL = new MondatokModel ();
  return (
    <div className="App ">
      <header className="App-header">
        <h1>Angol nyelv tanító dolgozat</h1>
      </header>
      <article>
        <Kiegeszit model={MODEL} />
      </article>
    </div>
  );
}

export default App;
