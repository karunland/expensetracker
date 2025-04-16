import { Inter } from 'next/font/google';
import './globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { ExpenseProvider } from './contexts/ExpenseContext';
import Navbar from './components/Navbar';
import { CSSProperties } from 'react';

const inter = Inter({ subsets: ['latin'] });

const layoutStyle: CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '700px',
  height: '700px',
  backgroundColor: '#dedede',
  borderRadius: '10px',
  border: '1px solid #dedede',
  padding: '20px',
  overflow: 'auto'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
        <ExpenseProvider>
          <div className="d-flex flex-column" style={layoutStyle}>
            <Navbar />
            <main className="flex-grow-1 container py-1">
              {children}
            </main>
          </div>
        </ExpenseProvider>
      </body>
    </html>
  );
}