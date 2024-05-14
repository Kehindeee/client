import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';
import ProductItem from './ProductItem';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const status = useSelector(state => state.products.status);
  const error = useSelector(state => state.products.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  let content;
  if (status === 'loading') {
    content = <p>Loading...</p>;
  } else if (status === 'succeeded') {
    content = products.map(product => (
      <ProductItem key={product.id} product={product} />
    ));
  } else if (status === 'failed') {
    content = (
      <div>
        <p>Error: {error}</p>
        <button onClick={() => dispatch(fetchProducts())} className="retry-button">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="product-list">
      {content}
    </div>
  );
};

export default ProductList;
