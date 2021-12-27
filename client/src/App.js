import './App.css';
import { Header, Intro, Navbar, Main, World, Input, Result } from './components';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
        <div className='start'>
          <Intro />
          <World />
          <Main />
        </div>
      </div>
      <div className="second">
        <Input />
        <Result />
      </div>
    </div>
  );
}

export default App;
