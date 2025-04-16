'use client';

import { Card, Table } from "react-bootstrap";
import CategoryItem from "../components/CategoryItem";
import { useExpenseContext } from "../contexts/ExpenseContext";
import AddCategory from "../components/AddCategory";

export default function CategoryPage() {
    const { categories } = useExpenseContext();

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <AddCategory />
            </div>
            <div>
                <Card>
                    <Card.Body>
                        <Table hover responsive>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category) => (
                                    <CategoryItem key={category.id} category={category} />
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
