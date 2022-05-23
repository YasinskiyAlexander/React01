import './App.css';
import { Counter } from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter value={3} min={-5}/>
      <Counter value={1} min={0} max={25}/>
      <Counter value={0} min={-10} max={10}/>
    </div>
  );
}

export default App;
