'use client';

import ExpenseItem from './ExpenseItem';
import { Card, Table } from 'react-bootstrap';
import { useExpenseContext } from '../contexts/ExpenseContext';

export default function ExpenseList() {
    const { expenses } = useExpenseContext();
    
    return (
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
    );
} 