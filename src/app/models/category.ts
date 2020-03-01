import { ExpenseType } from './expense-type';

export interface Category {
    name: string;
    totalBudget: string;
    remainingBudget: string;
    type: ExpenseType;
    notes?: string;
}
