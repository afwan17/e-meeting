import { useState } from "react";
import { loginApi } from "@/services/auth";
// import { useRouter } from "next/router";

export const useLogin = () => {
  //   const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (payload) => {
    try {
      setLoading(true);
      setError(null);

      const res = await loginApi(payload);

      // kalau berhasil, redirect ke login
      //   if (res.message === "User registered successfully") {
      //     router.push("/login");
      //   }

      return res;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return { login, loading, error };
};
