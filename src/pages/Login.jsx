import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Mock users
const mockUsers = [
  { id: 1, email: "admin@gmail.com", password: "123456", role: "admin" },
  { id: 2, email: "user@gmail.com", password: "123456", role: "user" },
];

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter all fields");
      return;
    }

    const foundUser = mockUsers.find(
      (user) =>
        user.email === email.trim() &&
        user.password === password.trim()
    );

    if (foundUser) {
      localStorage.setItem("user", JSON.stringify(foundUser));
      localStorage.setItem("token", "fake-token");

      window.dispatchEvent(new Event("authChanged"));

      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-page">
      <div className="overlay">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p className="subtitle">Sign in to continue your stay</p>

          {error && <p className="error">{error}</p>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}