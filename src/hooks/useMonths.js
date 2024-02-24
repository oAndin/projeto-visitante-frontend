import { useEffect, useState } from "react";
import { API } from "../services";

const useMonths = () => {
  const [months, setMonths] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMonths = async () => {
      try {
        const response = await API.get(`months`);
        let monthsLabel = response.data.map((month) => month.name);
        setMonths(monthsLabel);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMonths();
  }, []);

  return months;
};

export default useMonths;
