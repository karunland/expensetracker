'use client';
import Link from "next/link";
import { useExpenseContext } from "../contexts/ExpenseContext";
import { Expense } from "../types/Expense";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ExpenseItem({ expense }: { expense: Expense }) {
    const { getCategoryName, deleteExpense } = useExpenseContext();

    const handleDelete = (id: string) => {
        deleteExpense(id);
    }

    return (
        <tr>
            <td>{expense.title}</td>
            <td>${expense.amount.toFixed(2)}</td>
            <td>{getCategoryName(expense.categoryId)}</td>
            <td>{expense.date}</td>
            <td>
                <Link href={`/expense/${expense.id}`}>
                    <Button variant="outline-primary" size="sm">
                        View
                    </Button>
                </Link>
                {/* create delete button and add onclick functionality */}
                <Button
                    variant="outline-danger"
                    size="sm"
                    className="ms-2"
                    onClick={() => { handleDelete(expense.id) } }
                >
                    Delete
                </Button>

            </td>
        </tr>
    );
}
