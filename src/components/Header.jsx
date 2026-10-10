import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../services/authService";

function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const response = await getCurrentUser();

    if (response.success) {
      setUser(response.data);
    }
  };

  const logout = async () => {
    try {
      await logoutUser();

      setUser(null);
       localStorage.removeItem("user");

      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const isLoggedIn = !!user;

  return (
    <nav
      style={{
        padding: "15px",
        backgroundColor: "#333",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        {isLoggedIn ? (
          <>
            <Link
              to="/"
              style={{
                color: "white",
                marginRight: "20px",
              }}
            >
              Home
            </Link>

            <Link
              to="/add-expense"
              style={{
                color: "white",
                marginRight: "20px",
              }}
            >
              Add Expense
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/services"
              style={{
                color: "white",
                marginRight: "20px",
              }}
            >
              Services
            </Link>

            <Link
              to="/contact"
              style={{
                color: "white",
                marginRight: "20px",
              }}
            >
              Contact
            </Link>

            <Link
              to="/register"
              style={{
                color: "white",
                marginRight: "20px",
              }}
            >
              Register
            </Link>

            <Link
              to="/login"
              style={{
                color: "white",
                marginRight: "20px",
              }}
            >
              Login
            </Link>
          </>
        )}
      </div>

      {isLoggedIn && (
        <div>
          <span
            style={{
              color: "white",
              marginRight: "20px",
            }}
          >
            Welcome: {user?.name}
          </span>

          <button onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Header;