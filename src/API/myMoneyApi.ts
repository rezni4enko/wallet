import axios from "axios";

const instance: any = axios.create({
   baseURL: 'http://localhost:5000',
})

export const fetchMyMoney = async () => {
   const response = await instance.get('/my-money')
   return response.data
}