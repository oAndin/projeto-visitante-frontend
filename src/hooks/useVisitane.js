import { useEffect, useReducer, useState } from "react";
import { API } from "../services";

const useVisitantes = () => {
  // useReducer((state, action) => {
  //     switch (action.type) {
  //         case "FETCH_VISITANTES_REQUEST":
  //             return {
  //                 ...state,
  //                 loading: true,
  //                 error: null
  //             };
  //         case "FETCH_VISITANTES_SUCCESS":
  //             return {
  //                 ...state,
  //                 loading: false,
  //                 visitantes: action.payload
  //             };
  //         case "FETCH_VISITANTES_FAILURE":
  //             return {
  //                 ...state,
  //                 loading: false,
  //                 error: action.error
  //             };
  //         default:
  //             return state;
  //     }

  // })
  const [visitantes, setVisitantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  // id: visitante.id,
  // cpf: visitante.cpf,
  // name: visitante.name,
  // profession: visitante.profession,
  // city: visitante.city,
  // district: visitante.district,
  // visited_on: visitante.visited_on,

  useEffect(() => {
    const fetchVisitante = async () => {
      try {
        const response = await API.get(`visitante`)
        .then((response) => {
          setVisitantes(response);
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchVisitante();
  }, []);
  return visitantes;
};

export default useVisitantes;
