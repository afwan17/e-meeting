import { useState } from "react";
import { registerApi } from "@/services/auth";
// import { useRouter } from "next/router";

export const useRegister = () => {
  //   const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async (payload) => {
    try {
      setLoading(true);
      setError(null);

      const res = await registerApi(payload);

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
  return { register, loading, error };
};
