import { useEffect, useState } from "react";
import Button from "../../components/reUse/Button";
import Input from "../../components/reUse/Input";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import { loginAPI, verifyAPI } from "../../api/userAPI";
import { useDispatch } from "react-redux";
import { loginState } from "../../global/reduxState";
import ClipLoader from "react-spinners/ClipLoader";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = () => {
    // e.preventDefault();
    setLoading(true);
    const val = { email: state, token: password };
    loginAPI(val)
      .then((res) => {
        dispatch(loginState(res.data));
        setLoading(false);
        console.log(res);
      })
      .then(() => {
        navigate("/");
      });
  };

  const { userID } = useParams();

  useEffect(() => {
    if (userID) {
      verifyAPI(userID);
    }
  });

  return (
    <div className=" w-full h-[94vh] flex flex-col justify-center items-center ">
      <div className="mb-10 text-center flex items-center w-full flex-col">
        <div className="mb-5 w-20 h-20 rounded-full border flex justify-center items-center font-bold text-blue-600 text-[30px]">
          HMO
        </div>
        <div className="text-[26px] font-bold mb-3 text-blue-900">
          Welcome Back
        </div>
        <div className="text-[14px] -mt-4">
          {" "}
          Sign in now to continue your Experience.
        </div>
      </div>

      <div
        className="rounded-md bg-white min-h-[300px] w-[80%] md:w-[500px] border p-4"
        // onSubmit={handleSubmit}
      >
        <Input
          placeholder="Email"
          className="w-[97%]"
          type="email"
          required
          value={state}
          onChange={(e: any) => {
            setState(e.target.value);
          }}
        />
        <Input
          placeholder="Family Token Code"
          className="w-[97%]"
          show
          //   errorText="Password has to be passed"
          errorText={password && "Hope this is the right family token code?"}
          required
          value={password}
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        />

        <div>
          <Button
            name={loading ? "Loading..." : "Login"}
            className="w-[97%] bg-blue-900 text-white h-14 hover:bg-blue-800 transition-all duration-300"
            type="submit"
            onClick={handleSubmit}
            icon={loading && <ClipLoader color="white" size={18} />}
          />
        </div>
        <div className="mt-10 mb-0 ml-2 text-[13px] font-medium ">
          Sign in with social network
        </div>
        <div className="flex flex-col">
          <Button
            name="Continue with Google"
            className="h-14 bg-red-500 hover:bg-red-600 hover:text-white  transition-all duration-300 font-medium text-[#ababab]"
            icon={<FaGoogle />}
          />
        </div>
      </div>
      <div className="mt-5 text-[13px]">
        Don’t have an account yet?{" "}
        <span className="font-bold text-blue-900">
          <Link to="/register">Register here</Link>
        </span>
      </div>
    </div>
  );
};

export default SignIn;
