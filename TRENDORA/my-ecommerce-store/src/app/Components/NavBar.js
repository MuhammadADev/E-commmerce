import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <h1>My E-Commerce Store</h1>
      <Link href="/">Home</Link>
      <Link href="/cart">Cart</Link>
    </nav>
  );
};

export default Navbar;