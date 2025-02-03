import Navbar from '../components/Navbar';
import Product from '../components/Product';

const products = [
  { id: 1, name: 'Product 1', price: '$10' },
  { id: 2, name: 'Product 2', price: '$20' },
  { id: 3, name: 'Product 3', price: '$30' },
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;