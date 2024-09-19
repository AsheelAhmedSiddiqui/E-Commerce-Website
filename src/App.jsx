import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Products />}></Route>
				<Route path="/product/:id" element={<ProductDetails />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
				<Route path="/product">
					<Route index element={<Products />} />
					<Route path=":id" element={<ProductDetails />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
