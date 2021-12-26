import './App.css';
import { Header, Intro, Navbar, Main, World } from './components';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
        <Intro />
        <Main />
        <World />
      </div>
    </div>
  );
}

export default App;
