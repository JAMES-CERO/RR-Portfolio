
import { fontFamily } from '@mui/system';
import './App.css';
import Banner from './components/Banner';
import Description from './components/Description';
import StartButtom from './components/StartButtom';


function App() {
  
  const bgBTN = {
    background: 'lightPink'
}
  

  return (
    <div  className="App">
      <div style={bgBTN}>
      <Banner/>
      <StartButtom/>
      </div>
      <Description />
      
    </div>
  );
}

export default App;
