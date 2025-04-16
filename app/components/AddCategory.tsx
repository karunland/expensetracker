'use client';

import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useExpenseContext } from "../contexts/ExpenseContext";
import { useState } from "react";

export default function AddCategory() {
    const { addCategory } = useExpenseContext();
    const [title, setTitle] = useState<string>('');

    const HandleAddCategory = () => {
        if (!title) {
            alert("Please enter a title");
            return;
        }

        addCategory({
            name: title,
            icon: '💰',
            createdAt: new Date().toLocaleDateString()
        });

        setTitle('');
    }

    return (
        <div className="d-flex flex-grow-1 gap-2 justify-content-end " >
            <input className="form-control-sm " style={{ backgroundColor: 'white', color: 'black' }} placeholder="Name" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Button variant="primary" onClick={HandleAddCategory}>New <FaPlus /></Button>
        </div>
    );
}
