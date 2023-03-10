import './App.css';
import Banner from './components/Banner';
import Description from './components/Description';
import StartButtom from './components/StartButtom';


function App() {
  return (
    <div  className="App">
      <Banner/>
      <br/>
      <StartButtom/>
      <Description />
    </div>
  );
}

export default App;
