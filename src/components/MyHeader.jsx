import { Badge, Image } from "antd";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
function MyHeader() {
	const { cart } = useContext(CartContext);
	const logOut = () => {
		signOut(auth)
			.then(() => {
				alert("succes fully sign out");
			})
			.catch((error) => {
				alert("err===> " + error);
			});
	};
	return (
		<header>
			<div className="container py-6  flex items-center justify-between w-3/4 mx-auto">
				<div className="logo">
					<Link to={"/"}>
						<Image
							preview={false}
							src="data:image/jpeg;base64,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"
							height={50}
							width={50}
						/>
					</Link>
				</div>
				<nav className="flex items-center justify-center gap-10">
					<Link to={"/"}>Home</Link>
					<Link to={"/"}>Products</Link>
					<Link to={"/contact"}>Contact</Link>
				</nav>
				<div className="user-cart flex items-center gap-3">
					<button onClick={logOut}>Sign Out</button>
					<button>Login</button>
					<Link to={"/order"}>
						<Badge count={cart.length}>
							<ShoppingCartOutlined
								style={{
									fontSize: 30,
									color: "blue",
								}}
							/>
						</Badge>
					</Link>
				</div>
			</div>
		</header>
	);
}

export default MyHeader;
