import { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked me {count} times!</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>

  )
}

function App() {
  return (
    <Counter />
  )
}

export default App;
