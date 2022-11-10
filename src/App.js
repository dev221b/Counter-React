import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count+1)
  };

  const decrementHandler = () => {
    setCount(count-1)
  };

  return (
    
    <div>
  
            <h1>Counter</h1>        
            <p className="count">{count}</p>
            <div className='buttons'>
              <Button title="Increment +" clickHandler={incrementHandler}></Button>
              <Button title="Decrement -" clickHandler={decrementHandler}></Button>
            </div>
    </div>
  );
};

export default App;
