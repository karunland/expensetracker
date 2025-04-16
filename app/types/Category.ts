'use client';

export interface Category {
    id: string;
    name: string;
    icon: string;
    createdAt: string;
}

export var categoriesMock: Category[] = [
    {
        id: '1',
        name: 'Food',
        icon: '🍔',
        createdAt: new Date().toLocaleDateString(),
    },
    {
        id: '2',
        name: 'Transport',
        icon: '🚗',
        createdAt: new Date().toLocaleDateString(),
    },
    {
        id: '3',
        name: 'Entertainment',
        icon: '🎉',
        createdAt: new Date().toLocaleDateString(),
    },
    {
        id: '4',
        name: 'Utilities',
        icon: '💡',
        createdAt: new Date().toLocaleDateString(),
    },
]