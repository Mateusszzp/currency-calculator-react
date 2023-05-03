import { useEffect, useState } from 'react';
import axios from 'axios'

export const useDataApi = () => {
  const [dataApi, setDataApi] = useState({
    state: "loading"
  });

  useEffect(() => {
    const downloadApi = async () => {
      try {
        const response = await axios.get(
          'https://api.exchangerate.host/latest?base=PLN&symbols=USD,EUR,GBP,HRK')

        const { date, rates } = response.data

        setDataApi({
          state: "succes",
          date,
          rates,
        });
      }
      catch (error) {
        setDataApi({
          state: "error",
        })
      }
    };
    setTimeout(downloadApi, 3000);
  }, []);
  return { dataApi };
};

