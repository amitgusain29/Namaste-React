
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../slices/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <div>
            <h1 className="text-center m-5 p-5 font-bold text-xl">Cart</h1>
            <div className="w-6/12 place-items-end m-auto">
                <ItemList items={cartItems} showAddButton={false} showRemoveButton={true} />
            </div>
            <div className="place-items-center">
                {cartItems.length > 0 && <button className="p-2 m-2 bg-black text-white rounded-lg text-center" onClick={handleClearCart}>
                    Clear Cart
                </button>}
                <h2 className="text-red-500">
                    {cartItems.length === 0 && "Cart is empty. Add items to the cart!"}
                </h2>
            </div>
        </div >
    );
};

export default Cart;
