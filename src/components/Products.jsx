import { useEffect, useState } from "react";
import MyHeader from "./MyHeader";
import ProductCard from "./ProductCard";

function Products() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(3);

	useEffect(() => {
		fetch(`https://dummyjson.com/products?limit=${page}`)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.products);
				setLoading(false);
			});
	}, [page]);

	function handleScroll() {
		// console.log(document.documentElement.scrollHeight)
		if (
			window.innerHeight + document.documentElement.scrollTop + 1 >=
			document.documentElement.scrollHeight
		) {
			setPage((pre) => pre + 1);
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	}, []);

	console.log(products);

	return (
		<>
			<MyHeader />
			<section className="mt-10 grid grid-cols-3 gap-5 w-[1100px] mx-auto">
				{loading ? (
					<h1>Loading....</h1>
				) : (
					products.map((data) => <ProductCard data={data} key={data.id} />)
				)}
			</section>
		</>
	);
}

export default Products;
