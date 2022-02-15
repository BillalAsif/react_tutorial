import { useState } from 'react';
import './App.css';

function FavouriteColour() {
  const [color, setColor] = useState("red");
  return <h1>My favourite Colour is {color}!</h1>
}

function App() {
  return (
    <FavouriteColour />
  )
}

export default App;
