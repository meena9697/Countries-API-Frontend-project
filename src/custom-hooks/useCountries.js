// This hook is used to fetch all countries
import { useEffect, useState } from "react";

export default function useCountries(url) {
  const [countriesdata, setcountriesData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        let data = await response.json();
        setcountriesData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { countriesdata, error, loading };
}
