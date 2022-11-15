import axios from "axios"
import { useEffect, useState } from 'react'

const urlApi = ('https://api.exchangerate.host/latest')

export const useDataApi = () => {
  
const [post, setPost] = useState(null);
 
useEffect(() => {
  axios.get('https://api.exchangerate.host/latest')
  .then((response) => {
    setPost(response.data);
  })
 },[]);

if (!post) return null;

return {post}
console.log(post)

}

