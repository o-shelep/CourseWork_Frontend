import { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

export function useSignup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (name, email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed");
      }

      const data = await response.json();
      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error };
}
