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
const bookAppointment = (data) => axiosClient.post('/reservations', data);
// const getAppointment = () => axiosClient.post('/reservations/:id');
const getAppointment = () => axiosClient.get(`/reservations/${id}`);
const services = (data) => axiosClient.post('/services', data);
const getServices = () => axiosClient.get('/services?populate=*');
// const getCabang = () => axiosClient.get('/cabangs?populate=*');
const getCabangService = (id) => axiosClient.get('/cabang-services?populate=*');

const getCabang = () => axiosClient.get('/cabangs?populate[cabang_services][populate]=service');



export default {
  getRattings,
  postRating,
  bookAppointment,
  services,
  getServices,
  getCabang,
  getCabangService,
  getAppointment
}