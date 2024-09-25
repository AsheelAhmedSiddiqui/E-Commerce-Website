import { Button, Modal, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { GoogleOutlined } from "@ant-design/icons";
import { auth } from "../utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
function CheckOutModal({ isOpen, handleConfirm, handleCancel, checkoutOrder }) {
	// orderConfirm as props
	const [guestUser, setGuestUser] = useState(false);
	useEffect(() => {
		return setGuestUser(false);
	}, []);

	// console.log(GoogleAuthProvider);

	const googleSign = () => {
		const provider = new GoogleAuthProvider();
		provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				// IdP data available using getAdditionalUserInfo(result)
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
				alert("error====> " + errorCode + "\n" + "error====> " + errorMessage);
			});
	};

	// console.log(getAuth(app));
	const isLogin = auth.currentUser;
	console.log(isLogin);

	return (
		<>
			<Modal
				title="Proceed Order"
				centered
				open={isOpen}
				onOk={handleConfirm}
				onClose={false}
				onCancel={handleCancel}
				footer={null}
				width={800}
			>
				{!isLogin && !guestUser && (
					<div className="flex items-center justify-center flex-col gap-6 my-10">
						<Button onClick={googleSign} className="py-6 px-8">
							<GoogleOutlined /> Continue as Google
						</Button>
						<p>---------- OR ----------</p>
						<Button className="py-6 px-8">Continue as Guest</Button>
					</div>
				)}

				{isLogin ? (
					<Form onFinish={checkoutOrder} layout="vertical">
						<Form.Item name={"username"} label={"Username"}>
							<Input />
						</Form.Item>
						<Form.Item name={"email"} required label={"Email"}>
							<Input type="email" />
						</Form.Item>
						<Form.Item name={"number"} required label={"Phone Number"}>
							<Input type="number" />
						</Form.Item>
						<Form.Item required name={"address"} label={"Address"}>
							<Input.TextArea placeholder="Address" />
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				) : (
					<h1>Hell</h1>
				)}
			</Modal>
		</>
	);
}

export default CheckOutModal;
