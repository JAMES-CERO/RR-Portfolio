
import './App.css';
import Banner from './components/Banner';
import StartButtom from './components/StartButtom';


function App() {
  
  const bgBTN = {
    background: 'lightPink'
}

  return (
    <div style={bgBTN} className="App">
      <Banner/>
      <StartButtom/>
      
    </div>
  );
}

export default App;
