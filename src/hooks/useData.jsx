import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";
import "../../firebase";

function useData(databaseLocation) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const database = getDatabase();
      const databaseRef = ref(database, databaseLocation);
      const databaseQuery = query(databaseRef, orderByKey());

      try {
        setLoading(true);
        setError(false);
        const snapshot = await get(databaseQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setData([...Object.values(snapshot.val())]);
        } else {
          setError("No Data Available.");
        }
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    }

    fetchData();
  }, [databaseLocation]);

  return {
    loading,
    error,
    data,
  };
}

export default useData;
