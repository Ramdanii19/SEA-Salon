const { default: axios } = require("axios");


const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  }
})

const getRattings = () => axiosClient.get('/rattings?populate=*');
const postRating = (data) => axiosClient.post('/rattings', data);

export default {
  getRattings,
  postRating
}