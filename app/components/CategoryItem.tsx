'use client';

import Link from "next/link";
import { useExpenseContext } from "../contexts/ExpenseContext";
import { Category } from "../types/Category";
import { Button } from "react-bootstrap";

export default function CategoryItem({ category }: { category: Category }) {
    const { deleteCategory } = useExpenseContext();

    const handleDelete = (id: string) => {
        var res = deleteCategory(id);
        if (!res) {
            alert("Category not deleted");
        }
    }

    return (
        <tr>
            <td>{category.name}</td>
            <td>{category.createdAt}</td>
            <td>
                <Link href={`/category/${category.id}`}>
                    <Button
                        variant="outline-primary"
                        size="sm"
                        className="ms-2"
                    >
                        View Expenses
                    </Button>
                </Link>
                <Button
                    variant="outline-danger"
                    size="sm"
                    className="ms-2"
                    onClick={() => handleDelete(category.id)}
                >
                    Delete
                </Button>

            </td>
        </tr>
    );
}
