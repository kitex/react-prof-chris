import Book from "../types/Book";

function CartItem(props : Book) {
    return (
      <p>
        {props.title}:${props.price}
      </p>
    );
  }
  
  export default CartItem;
  