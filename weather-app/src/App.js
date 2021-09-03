import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
import { Londres } from './data'
function App() {
  return (
    <div className="App">
      <Header />
      <Card name={Londres.name} min={Londres.main.temp_min} max={Londres.main.temp_max} close={() => (alert(Londres.name))} />
      <Cards />

    </div>
  );
}

export default App;
