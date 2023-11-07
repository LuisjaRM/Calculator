import { useEffect, useState } from "react";

const loadPosts = async ({ url, setData, setError }) => {
  try {
    const response = await fetch(url);

    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.message);
    }

    const data = json.data;
    setData(data);
  } catch (error) {
    setError(error.message);
  }
};

export const useGetPosts = ({ url }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    loadPosts({ url, setData, setError });
  }, [url]);

  const refresh = () => loadPosts({ url, setData, setError });

  return { data, error, refresh };
};
