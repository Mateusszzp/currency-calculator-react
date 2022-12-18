import { useEffect, useState } from 'react';


export const useDataApi = () => {
  const [dataApi, setDataApi] = useState({
    state: "loading"
  });

  useEffect(() => {
    const downloadApi = async () => {
      try {
        const response = await fetch(
          'https://api.exchangerate.host/latest?base=PLN&symbols=USD,EUR,GBP,HRK'
        )
        if (!response.ok) {
          throw new Error(response.statusText);
        };
        const { date, rates } = await response.json();
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

