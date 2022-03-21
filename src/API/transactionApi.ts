import axios from "axios";
import { transactionIdRequestDTO } from "../models/transactionIdRequest.dto";

const instance: any = axios.create({
   baseURL: 'http://localhost:5000',
})

// export const fetchPostsApi = (limit, page) => {
//    return instance.get('https://jsonplaceholder.typicode.com/posts', {
//       params: {
//          _limit: limit,
//          _page: page
//       }
//    }).then(
//       response => response)
// }

// export const fetchTaskPage = (id) => {
//    return instance.get(`/${id}`).then(response => response.data)
// }

// export const fetchTaskComments = (id) => {
//    return instance.get(`/${id}/comments`).then(response => response.data)
// }

export const fetchAllTransactions = async () => {
   const response = await instance.get('/transaction')
   return response.data
}

// export const createTransactionCardRequest = (transactionCard: any) => {
//    return instance.post('/transaction', transactionCard)
// }

export const createTransactionCardRequest = async (transactionCard: any) => {
   const response = await instance.post('/transaction', transactionCard)
   return response.data
}

export const deleteTransactionCardRequest = (id: number) => {
   return instance.delete(`/transaction/${id}`)
}

// export const fetchTransactionById = (id: number) => instance.get(`/transaction/${id}`)
//    .then((response: any) => response.data[0])


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