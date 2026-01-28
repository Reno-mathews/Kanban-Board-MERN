import { useState } from 'react'
import Board from "./components/Board";
import Header from "./components/Header";
import { login, signup } from "./components/authstate";
import AuthForm from './components/AuthForm';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = async (email, password) => {
    const user = await login(email, password);
    setUser(user);
  };

  const handleSignup = async (email, password) => {
    const user = await signup(email, password);
    setUser(user);
  };

  return (
      <div className="nin-h-screen bg-gray-900 text-white">
        {user ? (
          <Header />
          <Board />
        ) : (
          <AuthForm
            isSignup={false}
            setIsSignUp={() => {}}
            email={""}
            setEmail={() => {}}
            password={""}
            setPassword={() => {}}
            onLogin={handleLogin}
            onSignup={handleSignup}
          />
        )}
      </div>
  );
}

export default App;
