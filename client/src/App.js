import './App.css';
import { Intro, Navbar, Main, World, Input, Final} from './components';

function App() {

  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <div className='start'>
          <Intro />
          <World />
          <Main />
        </div>
      </div>
      <div className="second">
        <Input />
      </div>
      <div>
        <Final />
      </div>
    </div>
  );
}

export default App;
