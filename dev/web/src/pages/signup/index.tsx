import { useState } from "react";
import { CREATE_USER } from "../../mutations/mutations";
import { useMutation } from "@apollo/client";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
const SignUp = (): JSX.Element => {
  const [email, setEmail] = useState<string | number | readonly string[]>();
  const [password, setPassword] =
    useState<string | number | readonly string[]>();
  const [username, setUsername] =
    useState<string | number | readonly string[]>();
  const [toggle, setToggle] = useState<boolean | null>(null);
  const [passwordVisbility, setPasswordVisibility] = useState<boolean>();

  const [createUser, { onCompleted }] = useMutation(CREATE_USER);

  const handleRegister = async () => {
    try {
      await createUser({ variables: { email, password, username } });
    } catch (err) {
      console.log(err);
      setToggle(true);
    }
  };
  return (
    <div className="w-screen h-screen bg-secondary flex justify-center align-middle ">
      <div className="">
        {toggle && (
          <h2 className="text-red-600">Error occured e-mail already exists</h2>
        )}
        <span className="flex flex-col">
          <h2>Username</h2>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className=" rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
          <h2>E-mail</h2>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className=" rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
          <h2>Password</h2>
          <span className="flex items-center">
            <input
              type={passwordVisbility ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              className=" rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <button
              className="ml-2"
              onClick={() => setPasswordVisibility((current) => !current)}
            >
              {passwordVisbility ? <BsFillEyeFill /> : <BsFillEyeSlashFill/>}
            </button>
          </span>
          <button
            onClick={handleRegister}
            className="animate-spin max-w-xs rounded-lg  mt-5 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            Sign up
          </button>
        </span>
      </div>
    </div>
  );
};
export default SignUp;
