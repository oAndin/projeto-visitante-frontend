import { useEffect, useState } from "react";
import { API } from "../services";

const useDays = () => {
  const [days, setDays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchDays = async () => {
      try {
        const response = await API.get(`days`);
        let daysLabel = response.data.map((day) => day.id);
        setDays(daysLabel);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDays();
  }, []);
  
  return days;
};

export default useDays;
