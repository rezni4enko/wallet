import axios from "axios";

const instance: any = axios.create({
   baseURL: 'http://localhost:5000'
})

export const fetchTransactionCategory = () => {
   return instance.get('/transactioncategory')
      .then((response: any) => {
         return response.data
      })
}