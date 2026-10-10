import { useEffect, useState } from "react";
import { getCurrentUser } from "../services/authService";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const response = await getCurrentUser();

    if (response.success) {
      setUser(response.data);
    }

    setLoading(false);
  };

  return {
    user,
    loading,
  };
};

export default useAuth;