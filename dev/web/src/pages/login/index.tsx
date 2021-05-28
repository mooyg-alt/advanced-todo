import { useState } from "react";

const Login = () => {
	const [email, setEmail] = useState<string | number | readonly string[]>();
	const [password, setPassword] =
		useState<string | number | readonly string[]>();
	return (
		<>
				<div className="w-screen h-screen bg-secondary flex justify-center align-middle	">
				<div className="">
				<span className="flex flex-col">
					<h2>E-mail</h2>
						<input type="text" onChange={(e)=>setEmail(e.target.value)} className=" rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
						<h2>Password</h2>
						<input type="text" onChange={(e)=>setPassword(e.target.value)} className=" rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
					<button className="max-w-xs	rounded-lg	mt-5 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Sign up</button>
					</span>
				</div>
			</div>
		</>
	);
};
export default Login