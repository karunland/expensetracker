'use client';

import { useExpenseContext } from '../../contexts/ExpenseContext';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

type PageParams = {
    id: string;
};

export default function ExpenseDetail({ params }: { params: PageParams }) {
    const { getExpenseById, getCategoryName } = useExpenseContext();
    const expense = getExpenseById(params.id);
    const categoryName = getCategoryName(expense.categoryId);

    if (!expense) {
        return (
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Expense Not Found</Card.Title>
                    <Link href="/">
                        <Button variant="primary">Go Back</Button>
                    </Link>
                </Card.Body>
            </Card>
        );
    }

    return (
        <Card className="mx-auto" style={{ maxWidth: '600px' }}>
            <Card.Header as="h2" className="text-center">{expense.title}</Card.Header>
            <Card.Body>
                <div className="mb-3">
                    <h5 className="text-muted">Amount</h5>
                    <p className="h4">${expense.amount.toFixed(2)}</p>
                </div>
                <div className="mb-3">
                    <h5 className="text-muted">Date</h5>
                    <p>{new Date(expense.date).toLocaleDateString()}</p>
                </div>
                <div className="mb-3">
                    <h5 className="text-muted">Category</h5>
                    <p>{categoryName}</p>
                </div>
                <div className="text-center">
                    <Link href="/">
                        <Button variant="primary">Back to List</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
} 