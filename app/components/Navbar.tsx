'use client';

import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';

export default function Navbar() {
    return (
        <BootstrapNavbar expand="lg" className="mb-4">
            <Container>
                <Link href="/" className="navbar-brand">
                    Expense Tracker
                </Link>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/" className="nav-link">
                            Home
                        </Link>
                        <Link href="/category" className="nav-link">
                            Categories
                        </Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
}