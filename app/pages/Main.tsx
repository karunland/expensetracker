'use client';

import ExpenseItem from '../components/ExpenseItem';
import { Card, Table } from 'react-bootstrap';
import { useExpenseContext } from '../contexts/ExpenseContext';
import AddExpense from '../components/AddExpense';

export default function Main() {
    const { expenses } = useExpenseContext();
    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex flex-grow-1 flex-column">
                    <h2>Expenses</h2>
                    <div>
                        <AddExpense />
                    </div>
                </div>
            </div>
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
