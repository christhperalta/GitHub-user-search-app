import { useState, useEffect } from "react";

export default function useFetch(getUser) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.github.com/users/${getUser}`)
      .then((response) => {
        if(!response.ok) throw new Error("No results");
        if (err) setErr(null);
       return  response.json();
      })
      .then((data) => setData(data))
      .catch((err) => {
        console.error(err);
        setErr(err);
      })
      .finally(() => setLoading(false));
  }, [getUser]);

  return { data, loading, err };
}

