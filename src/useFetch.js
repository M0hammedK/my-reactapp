import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoadong] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      const res = fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("couldn't fetch data from resource!");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoadong(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted!");
          } else {
            setError(err.message);
            setIsLoadong(false);
          }
        });
    }, 1000);
    return () => abortCont.abort();
  }, [url]);
  return { data, isLoading, error };
}

export default useFetch;
