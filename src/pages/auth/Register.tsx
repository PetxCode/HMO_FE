import { useState } from "react";
import Button from "../../components/reUse/Button";
import Input from "../../components/reUse/Input";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { registerAPI } from "../../api/userAPI";
import ClipLoader from "react-spinners/ClipLoader";

const Register = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (state !== "") {
      registerAPI({ email: state })
        .then(() => {
          setLoading(false);
        })
        .then(() => {
          navigate("/register-info");
        });
    }
  };

  return (
    <div className=" w-full h-[94vh] flex flex-col justify-center items-center ">
      <div className="mb-10 text-center flex items-center w-full flex-col">
        <div className="mb-5 w-20 h-20 rounded-full border flex justify-center items-center font-bold text-blue-600 text-[30px]">
          HMO
        </div>
        <div className="text-[26px] font-bold mb-3">Create an Account</div>
        <div className="text-[14px] -mt-4 ">
          sign up now and get free account instant.
        </div>
      </div>

      <form
        className="rounded-md bg-white min-h-[300px] w-[80%] md:w-[500px] border p-4"
        onSubmit={handleSubmit}
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

        <div>
          <Button
            name="Register"
            className="w-[97%] bg-blue-900 text-white h-14 hover:bg-blue-800 transition-all duration-300"
            type="submit"
            icon={loading && <ClipLoader color="white" size={18} />}
            // onClick={handleSubmit}
          />
        </div>
        <div className="mt-10 mb-0 ml-2 text-[13px] font-medium ">
          Sign up with social network
        </div>
        <div className="flex flex-col">
          <Button
            name="Continue with Google"
            className="h-14 bg-red-500 hover:bg-red-600 hover:text-white  transition-all duration-300 font-medium text-[#ababab]"
            icon={<FaGoogle />}
          />
        </div>
      </form>
      <div className="mt-5 text-[13px]">
        Already have an Account?{" "}
        <span className="font-bold text-blue-900">
          <Link to="/login">Login here</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
