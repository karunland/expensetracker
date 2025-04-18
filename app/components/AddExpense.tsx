'use client';

import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useExpenseContext } from "../contexts/ExpenseContext";
import { useState } from "react";

export default function AddExpense() {
    const { addExpense, SelectListCategories } = useExpenseContext();
    const [title, setTitle] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [categoryId, setCategoryId] = useState<string>('1');

    const HandleAddExpense = () => {
        console.log(title, amount, categoryId);
        if (!title || !amount || !categoryId) {
            alert("Please enter a title, amount and category");
            return;
        }

        addExpense({
            title: title,
            amount: amount,
            categoryId: categoryId,
            date: new Date().toISOString()
        });

        setTitle('');
        setAmount(0);
        setCategoryId('1');
    }

    return (
        <div className="d-flex flex-grow-1 gap-2 justify-content-end">
            <input className="form-control-sm" style={{ backgroundColor: 'white', color: 'black' }} placeholder="Name" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input className="form-control-sm" style={{ backgroundColor: 'white', color: 'black' }} type="number" placeholder="$" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} />
            <select 
                className="form-select-sm" 
                name="categoryId" 
                id="categoryId" 
                aria-label="Category" 
                value={categoryId} 
                onChange={(e) => setCategoryId(e.target.value)}
            >
                <SelectListCategories />
            </select>
            <Button variant="primary" onClick={HandleAddExpense}>New <FaPlus /></Button>
        </div>
    );
}
