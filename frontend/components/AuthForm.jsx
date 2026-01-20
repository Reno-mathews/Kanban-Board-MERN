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
        <div className="">
            <div className="">
                <h2 className="text-2xl font-bold text-center">
                    { isSignup ? "Signup" : "Login"}
                </h2>

                    <form
                        onSubmit={isSignup ? onSignup : onLogin}
                        className="space-y-4"
                    >
                            <input
                             className=""
                             type="email"
                             placeholder="Email"
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                            />

                            <input 
                                className=""
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <button 
                                className=""
                    </form>
            </div>
        </div>
    )
}