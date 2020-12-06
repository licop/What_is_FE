import React, {useState} from 'react';
import logo from './logo.svg';
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import useMousePosition from './hooks/useMousePosition';
import useURLLoader from './hooks/useURLLoader';
import './App.css';

const App: React.FC = () => {
  const [show, setShow] = useState(true);
  const position = useMousePosition();
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={() => {setShow(!show)}}>toggle mousetracker</button>
        </p>
        {loading ? <p>读取中</p> : <img src={data && data.message} />}
       <h2>{`x: ${position.x}, y:${position.y}`}</h2>
        <Hello message={'Hello world'} />
        <LikeButton />
        {show && <MouseTracker />}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
