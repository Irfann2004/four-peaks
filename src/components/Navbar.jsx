import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    // ✅ function to sync user
    const syncUser = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    syncUser(); // initial load

    // ❌ storage event won't work in same tab
    // ✅ use custom event instead
    window.addEventListener("authChanged", syncUser);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("authChanged", syncUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // ✅ trigger navbar update instantly
    window.dispatchEvent(new Event("authChanged"));

    alert("Logged out successfully");
    navigate("/");
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">Four Peaks</div>

      <ul className="nav-links">
        <li><Link to="/">Overview</Link></li>
        <li><Link to="/rooms">Rooms</Link></li>
        <li><Link to="/dining">Dining</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* ✅ Right side */}
      <div>
        {user ? (
          <>
            <span style={{ marginRight: "10px" }}>
              👤 {user.email}
            </span>
            <button onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <button onClick={() => navigate("/login")}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
}