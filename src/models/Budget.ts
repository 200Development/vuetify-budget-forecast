export interface Budget {
    id: number,
    name: string,
    allocation: number,
    balance: number, //used for tracking carry-over
}