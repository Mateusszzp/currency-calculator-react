import { useEffect, useState } from 'react'

export const useDataApi = () => {

  const [post, setPost] = useState({state : "loading"});


  useEffect(() => {
    const dataApi = async () => {
      try {
        const response = await fetch('https://api.exchangerate.host/latest?base=PLN&symbols=USD,EUR,GBP')

        if (!response.ok) {
          throw new Error(response.statusText);
        };


        const { date, rates } = await response.json()
        setPost({
          date,
          rates,
          state: "success",
          
        });

      }
      catch (error) {
        setPost({
          state: "error",
        })
      }


     

    };
    setTimeout(dataApi, 500)
  }, []);
  
  
  return {post};
};

