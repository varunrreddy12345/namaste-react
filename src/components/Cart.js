import { useSelector, useDispatch } from "react-redux";
import ItemList from "./IteamList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
 
 


  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl m-4">Cart</h1>

      {/* Clear Cart Button */}
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-200"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>

      <div className="w-6/12 m-auto">
        {cartItems.length === 0 ? (
          <h2 className="text-gray-500">Your cart is empty 🛒</h2>
        ) : (
          <ItemList iteam={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
