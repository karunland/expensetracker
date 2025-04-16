'use client';

import ExpenseItem from "@/app/components/ExpenseItem";
import { useExpenseContext } from "@/app/contexts/ExpenseContext";
import { use } from "react";
import { Table, Card } from "react-bootstrap";

type PageParams = {
    id: string;
};

export default function FilteredCategoryPage({ params }: { params: Promise<PageParams> }) {
    const { getExpensesbyCategoryId } = useExpenseContext();
    const { id } = use(params);
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