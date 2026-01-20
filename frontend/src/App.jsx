import { useState } from 'react'
import Board from "./components/Board";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="nin-h-screen bg-gray-900 text-white">
        <Board />
      </div>
  );
}

export default App;
