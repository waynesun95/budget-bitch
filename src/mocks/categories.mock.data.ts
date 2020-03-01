import { Category } from './../app/models/category';
import { ExpenseType } from '~/app/models/expense-type';

export const categoriesMockData: Category[] = [
    {
        name: 'Car Payment',
        totalBudget: '400',
        remainingBudget: '0',
        type: ExpenseType.REQUIRED,
        notes: 'Try to increase this payment as much as you can'
    },
    {
        name: 'Rent',
        totalBudget: '550',
        remainingBudget: '0'
        type: ExpenseType.REQUIRED,
    },
    {
        name: 'Utilities',
        totalBudget: '100',
        remainingBudget: '-5.22',
        type: ExpenseType.REQUIRED,
        notes: 'This month electric may be a bit high because you are paying for several months'
    },
    {
        name: 'Therapy',
        totalBudget: '500',
        remainingBudget: '250',
        type: ExpenseType.REQUIRED,
        notes: 'Did not have one session this month so should have 125 leftover at end'
    },
    {
        name: 'Car Insurance',
        totalBudget: '220',
        remainingBudget: '0',
        type: ExpenseType.REQUIRED,
        notes: '$220 until April b/c due in April. After will be $110/month (this is a bi yearly expense)'
    },
    {
        name: 'Food',
        totalBudget: '500',
        remainingBudget: '420',
        type: ExpenseType.REQUIRED
    },
    {
        name: 'Clothing/SHoes',
        totalBudget: '100',
        remainingBudget: '100',
        type: ExpenseType.REQUIRED
    },
    {
        name: 'Haircut',
        totalBudget: '30',
        remainingBudget: '30',
        type: ExpenseType.REQUIRED
    },
    {
        name: 'Fun',
        totalBudget: '600',
        remainingBudget: '512.5',
        type: ExpenseType.OPTIONAL
    },
    {
        name: 'Vacation',
        totalBudget: '400',
        remainingBudget: '400',
        type: ExpenseType.OPTIONAL
    },
    {
        name: 'Random Shit',
        totalBudget: '375.35',
        remainingBudget: '512.5',
        type: ExpenseType.OPTIONAL
    },
    {
        name: 'Roth IRA',
        totalBudget: '600',
        remainingBudget: '600',
        type: ExpenseType.OPTIONAL
    },
    {
        name: 'Brokerage',
        totalBudget: '200',
        remainingBudget: '200',
        type: ExpenseType.OPTIONAL
    }
];
