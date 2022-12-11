import { useEffect, useState } from 'react';
import Loading from "./Loading";

export const useDataApi = () => {
  const [dataApi, setdataApi] = useState({
    state: Loading
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
        setdataApi({
          state: "Kursy walut pochodzą z NBP na dzień ",
          date,
          rates,
        });
      }
      catch (error) {
        setdataApi({
          state: "UPS coś poszło nie tak zobacz czy masz połączenie z internetem",
        })
      }
    };
    setTimeout(downloadApi, 3000)
  }, []);
  return { dataApi };
};

