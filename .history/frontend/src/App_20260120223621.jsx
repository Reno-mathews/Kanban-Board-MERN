import { useState } from 'react'
import Board from "./components/Board";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="nin-h-screen bg-gray-900 text-white">
        <Header />
        <Board />
      </div>
  );
}

export default App;
