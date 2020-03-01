import { Expense } from './../app/models/expense';

export const requiredExpensesMockData: Expense[] = [
    {
        title: 'February Car Payment',
        categoryName: 'Car Payment',
        amount: '400',
        date: new Date(2020, 1, 14),
        notes: 'Monthly car loan payment'
    },
    {
        title: 'February Rent',
        categoryName: 'Rent',
        amount: '550',
        date: new Date(2020, 1, 5),
        notes: 'Monthly rent payment'
    },
    {
        title: 'February Coned Payment',
        categoryName: 'Utilities',
        amount: '81.72',
        date: new Date(2020, 1, 6),
    },
    {
        title: 'February Wifi Payment',
        categoryName: 'Utilities',
        amount: '23.5',
        date: new Date(2020, 1, 13),
        notes: 'Monthly wifi payment'
    },
    {
        title: 'Therapy 2/7 Session',
        categoryName: 'Therapy',
        amount: '125',
        date: new Date(2020, 1, 10)
    },
    {
        title: 'Therapy 2/14 Session',
        categoryName: 'Therapy',
        amount: '125',
        date: new Date(2020, 1, 14)
    },
    {
        title: 'Monthly Car Insurance Payment',
        categoryName: 'Car Insurance',
        amount: '220',
        date: new Date(2020, 1, 7),
        notes: '$220/month until April'
    },
    {
        title: 'Drunk grubhub Chinese',
        categoryName: 'Food',
        amount: '26.67',
        date: new Date(2020, 1, 3)
    },
    {
        title: 'ShopRite groceries',
        categoryName: 'Food',
        amount: '40.37',
        date: new Date(2020, 1, 2)
    },
    {
        title: 'Chipotle',
        categoryName: 'Food',
        amount: '12.96',
        date: new Date(2020, 1, 7)
    }
];
