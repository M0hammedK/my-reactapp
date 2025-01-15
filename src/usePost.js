import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function usePost(url, data) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setEror] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (!data) return;
    const postData = async () => {
      setIsLoading(true);
      setEror(null);

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.stateText}`);
        }
      } catch (err) {
        setEror(err.message);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
          history.push("/");
        }, 1000);
      }
    };
    postData();
  }, [url, data, history]);
  return { isLoading, error };
}

export default usePost;
