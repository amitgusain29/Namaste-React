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
        <div className="min-h-[60vh] bg-orange-50 py-10 flex flex-col items-center">
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg border border-orange-200 p-8">
                <h1 className="text-center mb-6 font-bold text-3xl text-orange-600">Cart</h1>
                <div className="w-full">
                    <ItemList items={cartItems} showAddButton={false} showRemoveButton={true} />
                </div>
                <div className="flex flex-col items-center mt-6">
                    {cartItems.length > 0 && <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-semibold shadow transition-colors mb-4" onClick={handleClearCart}>
                        Clear Cart
                    </button>}
                    <h2 className="text-orange-500 font-semibold text-lg">
                        {cartItems.length === 0 && "Cart is empty. Add items to the cart!"}
                    </h2>
                </div>
            </div>
        </div >
    );
};

export default Cart;
