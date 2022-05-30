import './App.css';
import { Counter } from './components/Counter';
import {FunctionalCounter} from "./components/FunctionalCounter";

function App() {
  return (
    <div className="App">
        <h2>Класовий компонент лічильник</h2>
        <Counter/>
        <Counter value={1} min={0} max={25}/>
        <Counter value={3} min={-10} max={10}/>


        <h2>Функціональний компонент лічильник</h2>
        <FunctionalCounter/>
        <FunctionalCounter value={1} min={0} max={25}/>
        <FunctionalCounter value={3} min={-10} max={10}/>
    </div>
  );
}

export default App;
