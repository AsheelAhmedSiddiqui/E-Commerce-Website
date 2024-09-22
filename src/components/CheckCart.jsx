import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import MyHeader from "./MyHeader";
import { Button } from "antd";
import CheckOutModal from "./CheckOutModal";
function CheckCart() {
	const { cart } = useContext(CartContext);
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);

	const totalItemsQuantity = cart.reduce(
		(value, items) => value + items.quantity,
		0
	);
	const totalItemsPrice = cart.reduce(
		(value, items) => value + items.quantity * items.price,
		0
	);
	return (
		<>
			<MyHeader />
			<CheckOutModal
				isOpen={isOpen}
				handleConfirm={() => setIsOpen(true)}
				handleCancel={() => setIsOpen(false)}
				// orderConfirm={checkOutOrder}
			/>
			<div className="flex gap-10 mx-auto w-3/4 mt-6">
				<div className="quantity flex items-center justify-center h-28 rounded border border-gray-500 w-[100%]  flex-col">
					<span>Total Items Quantity</span>
					<span className="text-2xl font-bold flex gap-2">
						{" "}
						{totalItemsQuantity}
					</span>
				</div>
				<div className="price flex items-center flex-col justify-center h-28 rounded border border-gray-500 w-[100%]">
					<span>Total Items Price</span>
					<span className="text-2xl font-bold ">
						{" "}
						<span className="text-3xl">$</span>
						{totalItemsPrice}
					</span>
				</div>
				<div className="proceed flex items-center justify-center h-28 rounded border border-gray-500 w-[100%]">
					<Button className="py-6 px-8 font-medium" onClick={openModal}>
						Proceed your order
					</Button>
				</div>
			</div>
			<div className="mx-auto w-3/4 mt-6">
				{cart.map((item, index) => (
					<CartItem pro={item} key={index} />
				))}
			</div>
		</>
	);
}

export default CheckCart;
