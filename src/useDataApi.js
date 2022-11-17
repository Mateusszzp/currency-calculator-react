import axios from "axios"
import { useEffect, useState } from 'react'

export const useDataApi = () => {
  
const [post, setPost] = useState(null);
 
useEffect(() => {
   

    axios.get('https://api.exchangerate.host/latest?base=PLN&symbols=USD,EUR,CZK')
    .then((response) => {
      setPost(response.data);
})
  }, []);



return {post}
}

