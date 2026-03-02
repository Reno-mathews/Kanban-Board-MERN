const login = async (email, password) => {
    const res = await fetch("https://study-analytics-mern.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Login failed");
    }

    localStorage.setItem("token", data.token);
    return data.user;
}

const signup = async (email, password) => {
    const res = await fetch("https://study-analytics-mern.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Signup failed");
    }
    localStorage.setItem("token", data.token);
    return data.user;
};

export { login, signup };
