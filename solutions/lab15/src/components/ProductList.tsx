import Product from './Product.jsx';
import styles from './ProductList.module.css';
import { ProductListProps } from '../../types/productList.ts';
function ProductList(props: ProductListProps) {
  let itemIds = props.itemsInCart.map((item) => item.id);

  return (
    <ul className={styles.productList}>
      {props.products.map((product) => (
        <li key={product.id} className={styles.productListItem}>
          <Product
            {...product}
            inCart={itemIds.includes(product.id) ? true : false}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
