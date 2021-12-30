import './App.css';
import { Intro, Navbar, Main, World, Input, Result} from './components';
import { ResultProvider } from './components/Context/ResultContext';
import { QuestionProvider } from './components/Context/QuestionContext'

function App() {

  return (
    <div className='App'>
      <QuestionProvider>
        <ResultProvider>
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
            <Result />
          </div>
        </ResultProvider>
      </QuestionProvider>
    </div>
  );
}

export default App;
