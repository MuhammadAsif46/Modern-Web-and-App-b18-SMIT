import { createContext } from "react";

const CartContext = createContext({
	cart: [],
	addToCart: () => {},
	updateQuantity: () => {},
	removeFromCart: () => {},
	cartTotal: 0,
})

export default CartContext