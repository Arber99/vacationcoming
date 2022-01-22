import './App.css';
import { Navbar } from './components';
import { ResultProvider } from './components/Context/ResultContext';
import { QuestionProvider } from './components/Context/QuestionContext';
import { MainProvider } from './components/Context/MainContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import FAQ from './pages/FAQ';

function App() {
  return (
    <div className='App'>
      <MainProvider>
        <QuestionProvider>
          <ResultProvider>

            <Router>
              <Navbar />
              {/* <Warning /> */}
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/info/:country' element={<Info />} />
                <Route exact path='/faq' element={<FAQ />} />
              </Routes>
            </Router>

          </ResultProvider>
        </QuestionProvider>
      </MainProvider>
    </div>
  );
}

export default App;
