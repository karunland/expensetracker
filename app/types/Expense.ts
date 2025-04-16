'use client';

export interface Expense {
    id: string;
    title: string;
    amount: number;
    date: string;
    categoryId: string;
}


export var expensesMock: Expense[] = [
    {
        id: '1',
        title: 'Groceries',
        amount: 50,
        date: new Date().toLocaleDateString(),
        categoryId: '1',
    },
    {
        id: '2',
        title: 'Gas',
        amount: 30,
        date: new Date().toLocaleDateString(),
        categoryId: '2',
    },
    {
        id: '3',
        title: 'Movie Tickets',
        amount: 20,
        date: new Date().toLocaleDateString(),
        categoryId: '3',
    },
    {
        id: '4',
        title: 'Electricity Bill',
        amount: 100,
        date: new Date().toLocaleDateString(),
        categoryId: '3',
    }
]