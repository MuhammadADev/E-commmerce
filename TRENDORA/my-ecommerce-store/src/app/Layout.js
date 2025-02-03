// app/layout.js
import '../styles/globals.css';
import { CartProvider } from '../context/CartContext';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'My E-Commerce Store',
  description: 'A simple e-commerce store built with Next.js',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
};

export default RootLayout;v