export interface TxnsHistory {
    id: number;
    trn_date: Date;
    trn_time: string;
    trn_narration: string;
    debit_amount: number;
    credit_amount: number;
    running_balance: number;
}

