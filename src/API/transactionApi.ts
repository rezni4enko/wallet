import axios from "axios";

const instance: any = axios.create({
   baseURL: 'http://localhost:5000',
})

export const fetchAllTransactions = async () => {
   const response = await instance.get('/transaction')
   return response.data
}

export const createTransactionCardRequest = async (transactionCard: any) => {
   const response = await instance.post('/transaction', transactionCard)
   return response.data
}

export const deleteTransactionCardRequest = (id: number) => {
   return instance.delete(`/transaction/${id}`)
}

export const fetchTransactionById = async (id: number) => {
   const response = await instance.get(`/transaction/${id}`)
   return response.data[0]
}

// export const loadTodo = async (): Promise<TodoDto[]> => {
//    try {
//       const response = await axios.get<TodoDto[]>('todo/getAll')
//       return response.data
//    } catch (err: any) {
//       console.log(err)
//       return []
//    }
// }