import { useState } from "react";
import axios from "axios";

function usePatch<T = any, B = any>() {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const patch = async (url: string, body: B) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.patch<T>(url, body);
      setData(response.data);
      return response.data;
    } catch (err: any) {
      setError(
        err.response?.data?.message || err.message || "Patch request failed"
      );
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { patch, data, loading, error };
}

export default usePatch;
