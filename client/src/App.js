import './App.css';
import { Header, Intro, Navbar, Main, World, Input } from './components';

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
      <div>
        <Input />
      </div>
    </div>
  );
}

export default App;
