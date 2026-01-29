function AuthForm ({
    isSignup,
    setIsSignUp,
    email,
    setEmail,
    password,
    setPassword,
    onLogin,
    onSignup,
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-2">
                    { isSignup ? "Create an account" : "Welcome back"}
                </h2>
                <p className="text-center text-gray-400 mb-6">
                    {isSignup ? "Sign up to get started" : "Log in to your Kanban board"}
                </p>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            isSignup ? onSignup(email, password) : onLogin(email,password);
                        }}
                        className="space-y-4"
                    >
                        <div className="space-y-1">
                            <label className="text-sm text-gray-300">Email</label>
                            <input
                            type="email"
                             className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                             placeholder="you@example.com"
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm text-gray-300">Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                            <button 
                                type="submit"
                                className="w-full mt-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition font-semibold"
                                >
                                    {isSignup ? "Signup": "Login"}
                            </button>
                    </form>

                    <p className="text-center">
                        {isSignup? "Already have an account?" : "Don't have an account"}
                        <button 
                            className=""
                            onClick={() => setIsSignUp(!isSignup)}
                        >
                            {isSignup? "Login" : "Signup"}
                        </button>
                    </p>
            </div>
        </div>
    );
}

export default AuthForm;