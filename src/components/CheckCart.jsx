import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import MyHeader from "./MyHeader";

function CheckCart() {
	const { cart } = useContext(CartContext);
	return (
		<>
			<MyHeader />
			<div className="states"></div>
			<div className="mx-auto w-3/4 mt-6">
				{cart.map((item, index) => (
					<CartItem pro={item} key={index} />
				))}
			</div>
		</>
	);
}

export default CheckCart;
