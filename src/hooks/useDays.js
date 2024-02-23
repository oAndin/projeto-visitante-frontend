import { useEffect, useState } from "react";
import { API } from "../services";

const useDays = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchDays = async () => {
      try {
        const response = await API.get(`days`);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDays();
  }, []);
  return { data, loading, error };
};

export default useDays;
