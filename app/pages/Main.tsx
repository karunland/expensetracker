import { Button } from 'react-bootstrap';
import Link from 'next/link';
import ExpenseList from '../components/ExpenseList';

export default function Main() {
    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Expenses</h2>
                <Link href="/add">
                    <Button variant="primary">Add New Expense</Button>
                </Link>
            </div>
            <div>
                <ExpenseList />
            </div>
        </div>
    );
}
