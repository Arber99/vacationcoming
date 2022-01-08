import './App.css';
import { Intro, Navbar, Main, World, Input, Result, Warning} from './components';
import { ResultProvider } from './components/Context/ResultContext';
import { QuestionProvider } from './components/Context/QuestionContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';

function App() {
  return (
    <div className='App'>
      <QuestionProvider>
        <ResultProvider>
          <Router>
            <div className='gradient__bg'>
              <Navbar />
            </div>
            <Warning />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/info/:country' element={<Info />} />
            </Routes>
          </Router>
        </ResultProvider>
      </QuestionProvider>
    </div>
  );
}

export default App;
