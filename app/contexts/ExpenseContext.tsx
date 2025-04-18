'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Expense, expensesMock } from '../types/Expense';
import { Category, categoriesMock } from '../types/Category';
import { v4 as uuidv4 } from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css";
import AddCategory from '../components/AddCategory';

type ExpenseContextType = {
  expenses: Expense[];
  categories: Category[];
  addExpense: (expense: Omit<Expense, 'id'>) => void;
  addCategory: (category: Omit<Category, 'id'>) => void;
  getExpenseById: (id: string) => Expense;
  getCategoryName: (id: string) => string;
  deleteExpense: (id: string) => void;
  deleteCategory: (id: string) => boolean;
  getExpensesbyCategoryId: (categoryId: string) => Expense[];
  SelectListCategories: () => React.ReactNode;
  AddCategory: () => void;
};

const ExpenseContext = createContext<ExpenseContextType>({} as ExpenseContextType);

export const ExpenseProvider: React.FC<{ children: React.ReactNode }> = ({ children }): React.ReactElement => {
  const [expenses, setExpenses] = useState<Expense[]>(expensesMock);
  const [categories, setCategories] = useState<Category[]>(categoriesMock);

  useEffect(() => {
    setExpenses(expenses);
    setCategories(categories);
  }, []);

  const addExpense = (expense: Omit<Expense, 'id'>) => {
    setExpenses(prev => [...prev, { ...expense, id: uuidv4() }]);
  };

  const deleteExpense = (id: string) => {
    setExpenses(prev => prev.filter(expense => expense.id !== id));
  };

  const deleteCategory = (id: string) => {
    const hasExpense = expenses.some(expense => expense.categoryId === id);
    if (hasExpense) {
      alert('Cannot delete category with existing expenses');
      return false;
    }

    setCategories(prev => prev.filter(category => category.id !== id));
    return true;
  };

  const getExpensesbyCategoryId = (categoryId: string) => {
    return expenses.filter(expense => expense.categoryId === categoryId);
  }

  const getExpenseById = (id: string) => {
    var expense = expenses.find(expense => expense.id === id);
    if (expense) {
      return expense;
    }
    return {
      id,
      title: '',
      amount: 0,
      date: '',
      categoryId: ''
    };
  }

  const SelectListCategories = () => {
    return categories.map(category => (
      <option
        key={category.id}
        value={category.id}
      >
        {category.name}
      </option>
    ));
  }

  const addCategory = (category: Omit<Category, 'id'>) => {
    setCategories(prev => [...prev, { ...category, id: uuidv4() }]);
  };

  const getCategoryName = (id: string) => {
    const category = categories.find(category => category.id === id);
    if (category) {
      return category.name;
    }
    return '-';
  }

  return (
    <ExpenseContext.Provider value={{ expenses, categories, addExpense, addCategory, getExpenseById, getCategoryName, deleteCategory, deleteExpense, getExpensesbyCategoryId, SelectListCategories, AddCategory } as ExpenseContextType}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenseContext = () => {
  const context = useContext(ExpenseContext);
  if (!context) throw new Error('useExpenseContext must be used within ExpenseProvider');
  return context;
};
