import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import { GoogleOutlined } from "@ant-design/icons";
import { auth } from "./firebase/auth";
function CheckOutModal({ isOpen, handleConfirm, handleCancel }) {
	// orderConfirm as props

	const [guestUser, setGuestUser] = useState(false);
	useEffect(() => {
		return setGuestUser(false);
	}, []);

	console.log(auth);

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
				<div className="flex items-center justify-center flex-col gap-6 my-10">
					<Button className="py-6 px-8">
						<GoogleOutlined /> Continue as Google
					</Button>
					<p>---------- OR ----------</p>
					<Button className="py-6 px-8">Continue as Guest</Button>
				</div>
			</Modal>
		</>
	);
}

export default CheckOutModal;
