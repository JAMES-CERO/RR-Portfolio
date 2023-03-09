
import { fontFamily } from '@mui/system';
import './App.css';
import Banner from './components/Banner';
import Description from './components/Description';
import StartButtom from './components/StartButtom';


function App() {
  
 
  

  return (
    <div  className="App">
      <div >
      <Banner/>
      <StartButtom/>
      <Description />
      </div>
      
      
    </div>
  );
}

export default App;
