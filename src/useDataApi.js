import axios from "axios"
import { useEffect, useState } from 'react'

export const useDataApi = () => {

  const [post, setPost] = useState("loand");

  
useEffect(() => {
  fetch('https://api.exchangerate.host/latest?base=PLN&symbols=USD,EUR,GBP')
.then((respons) => respons.json())
.then(data => setPost(data))

.catch((error) => console.error("Jest jakiś błąd", error));
   
},[])



  return { post }
}

