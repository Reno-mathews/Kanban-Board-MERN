import { useState, useEffect } from 'react'
import Board from "./components/Board";
import Header from "./components/Header";
import { login, signup } from "./components/authstate";
import AuthForm from './components/AuthForm';

function App() {
  const [user, setUser] = useState(null);
  const[isSignup, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token });
    }

  }, []);

  const handleLogin = async (email, password) => {
    const user = await login(email, password);
    setUser(user);
  };

  const handleSignup = async (email, password) => {
    const user = await signup(email, password);
    setUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
      <div className="min-h-screen bg-gray-900 text-white">
        {user ? (
          <div>
          <Header onLogout={handleLogout}/>
          <Board />
        </div>
        ) : (
          <AuthForm
            isSignup={isSignup}
            setIsSignUp={setIsSignUp}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onLogin={handleLogin}
            onSignup={handleSignup}
          />
        )}
      </div>
  );
}

export default App;
