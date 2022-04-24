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
export const deleteTransactionCategory = (id: number) => {
   return instance.delete(`/transactioncategory/${id}`)
}

export const changeInMainPage = (id: number, body: any) => {
   return instance.patch(`/transactioncategory/${id}`, body)
}