export interface Expense {
    title: string;
    categoryName: string; // set to the name attribute of the category
    amount: string;
    date: Date;
    notes?: string;
}
