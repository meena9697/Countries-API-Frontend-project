import { useState, useEffect } from 'react';

export default function useCountry(url) {
    useEffect(() => {
        fetchItem();
      }, [url]);
    
      const [country, setCountry] = useState({});
      const [error, setError] = useState();
      const [loading, setLoading] = useState(true);
    
    
      const fetchItem = async () => {
        try{
        const fetchItem = await fetch(url);
        const data = await fetchItem.json();
        setCountry(data)
          } catch (err) {
            setError(err);
          } finally {
            setLoading(false);
          }
        };
       return {country, error, loading} 
}
