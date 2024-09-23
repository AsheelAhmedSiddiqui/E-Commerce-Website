import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import { GoogleOutlined } from "@ant-design/icons";
import { auth } from "../utils/firebase";
function CheckOutModal({ isOpen, handleConfirm, handleCancel }) {
	// orderConfirm as props
	const [guestUser, setGuestUser] = useState(false);
	useEffect(() => {
		return setGuestUser(false);
	}, []);

	// console.log(getAuth(app));
	const isLogin = auth.currentUser;
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
						<Button className="py-6 px-8">
							<GoogleOutlined /> Continue as Google
						</Button>
						<p>---------- OR ----------</p>
						<Button className="py-6 px-8">Continue as Guest</Button>
					</div>
				)}
				{isLogin ||
					(guestUser && (
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
					))}
			</Modal>
		</>
	);
}

export default CheckOutModal;
