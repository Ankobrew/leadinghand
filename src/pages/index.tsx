import { useState, useEffect } from "react";
import { Answer } from "models/answer";

export default function Home() {
  const [data, setData] = useState<Answer | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000");
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return <h1>{data?.answers}</h1>;
}
