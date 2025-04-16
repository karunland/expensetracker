'use client';

import ExpenseItem from "@/app/components/ExpenseItem";
import { useExpenseContext } from "@/app/contexts/ExpenseContext";
import { Table, Card } from "react-bootstrap";

export default function FilteredCategoryPage({ params }: { params: { id: string } }) {
    const id = params.id;
    const { getExpensesbyCategoryId } = useExpenseContext();
    const expenses = getExpensesbyCategoryId(id);

    return (
        <div className="container mt-4">
            <div>
                <Card>
                    <Card.Body>
                        <Table hover responsive>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Amount</th>
                                    <th>Category</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expenses.map((expense) => (
                                    <ExpenseItem key={expense.id} expense={expense} />
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}