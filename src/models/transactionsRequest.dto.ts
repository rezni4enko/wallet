export interface transactionsRequestDTO {
   id: number
   transactionCategory: string
   comment: string
   transactionValue: number
   isIncome?: boolean
   idUser?: number
}