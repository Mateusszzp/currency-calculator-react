import { useEffect, useState } from 'react'
import Loading from "./Loading"


export const useDataApi = () => {
  const [post, setPost] = useState({
    state: Loading
  });

  useEffect(() => {
    const dataApi = async () => {
      try {
        const response = await fetch(
          'https://api.exchangerate.host/latest?base=PLN&symbols=USD,EUR,GBP'
        )

        if (!response.ok) {
          throw new Error(response.statusText);
        };

        const { date, rates } = await response.json()
        setPost({
          state: "Kursy wlut pochodzą z NBP na dzień ",
          date,
          rates,
        });
      }
      catch (error) {
        setPost({
          state: "UPS coś poszło nie tak zobacz czy masz połączenie z internetem",
        })
      }
    };
    setTimeout(dataApi, 3000)
  }, []);
  return { post };
};

