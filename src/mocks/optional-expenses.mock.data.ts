import { Expense } from "~/app/models/expense";

export const optionalExpensesMockData: Expense[] = [
    {
        title: 'Beers at MSG',
        categoryName: 'Fun',
        amount: '34',
        date: new Date(2020, 1, 1)
    },
    {
        title: 'McSorleys',
        categoryName: 'Fun',
        amount: '20',
        date: new Date(2020, 1, 3)
    },
    {
        title: 'White Horse Tavern',
        categoryName: 'Fun',
        amount: '33.5',
        date: new Date(2020, 1, 14)
    },
    {
        title: 'Spotify',
        categoryName: 'Other Shit',
        amount: '10.65',
        date: new Date(2020, 1, 13),
        notes: 'Move this to its own category next month'
    },
    {
        title: 'Basketball Indoor Pickup',
        categoryName: 'Other Shit',
        amount: '14',
        date: new Date(2020, 1, 16)
    }
];
