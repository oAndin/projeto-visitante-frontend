import { useEffect, useState } from "react";
import { API } from "../services";

const useMonths = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {

    const fetchMonths = async () => {
        try {
            const response = await API.get(`months`);
            console.log(response.data);
            setData(response.data);
        } catch (error) {
            setError(error);
        }
        finally {
            setLoading(false);
        }
    }
    fetchMonths();
  }, []);


    return { data, loading, error };
};

export default useMonths;
